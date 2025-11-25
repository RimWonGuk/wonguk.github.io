#include "calculator.h"
#include "ui_calculator.h"
#include<QtDebug>

Calculator::Calculator(QWidget *parent)
    : QMainWindow(parent)
    , ui(new Ui::Calculator)
{
    sumSoFar = 0.0;
    factorSoFar = 0.0;
    waitingForOperand = true;
    ui->setupUi(this);

    connect(ui->btn0, 			&QPushButton::clicked, this, &Calculator::digitClicked);
    connect(ui->btn1, 			&QPushButton::clicked, this, &Calculator::digitClicked);
    connect(ui->btn2, 			&QPushButton::clicked, this, &Calculator::digitClicked);
    connect(ui->btn3, 			&QPushButton::clicked, this, &Calculator::digitClicked);
    connect(ui->btn4, 			&QPushButton::clicked, this, &Calculator::digitClicked);
    connect(ui->btn5, 			&QPushButton::clicked, this, &Calculator::digitClicked);
    connect(ui->btn6, 			&QPushButton::clicked, this, &Calculator::digitClicked);
    connect(ui->btn7, 			&QPushButton::clicked, this, &Calculator::digitClicked);
    connect(ui->btn8, 			&QPushButton::clicked, this, &Calculator::digitClicked);
    connect(ui->btn9, 			&QPushButton::clicked, this, &Calculator::digitClicked);

    connect(ui->btnClear, 		&QPushButton::clicked, this, &Calculator::clear);
    connect(ui->btnClearAll, 	&QPushButton::clicked, this, &Calculator::clearAll);

    connect(ui->btnPlus, 		&QPushButton::clicked, this, &Calculator::additiveOperatorClicked);
    connect(ui->btnMinus, 		&QPushButton::clicked, this, &Calculator::additiveOperatorClicked);

    connect(ui->btnMultiply, 	&QPushButton::clicked, this, &Calculator::multiplicativeOperatorClicked);
    connect(ui->btnDivide, 		&QPushButton::clicked, this, &Calculator::multiplicativeOperatorClicked);

    connect(ui->btnEqual, 		&QPushButton::clicked, this, &Calculator::equalClicked);
    connect(ui->btnDot, 		&QPushButton::clicked, this, &Calculator::dotClicked);
    connect(ui->btnBackspace, 	&QPushButton::clicked, this, &Calculator::backspaceClicked);

}

Calculator::~Calculator()
{
    delete ui;
}

void Calculator::digitClicked()
{
    QLineEdit *display = ui->editDisplay;

    QPushButton *clickedButton = qobject_cast<QPushButton *>(sender());
    int digitValue = clickedButton->text().toInt();
    if (display->text() == "0" && digitValue == 0.0)
        return;

    if (waitingForOperand) {
        display->clear();
        waitingForOperand = false;
    }
    display->setText(display->text() + QString::number(digitValue));
}

void Calculator::additiveOperatorClicked()
{
    QLineEdit *display = ui->editDisplay;
    QPushButton *clickedButton = qobject_cast<QPushButton *>(sender());
    QString clickedOperator = clickedButton->text();
    double operand = display->text().toDouble();

    if (!pendingMultiplicativeOperator.isEmpty()) {
        if (!calculate(operand, pendingMultiplicativeOperator)) {
            abortOperation();
            return;
        }
        display->setText(QString::number(factorSoFar));
        operand = factorSoFar;
        factorSoFar = 0.0;
        pendingMultiplicativeOperator.clear();
    }

    if (!pendingAdditiveOperator.isEmpty()) {
        if (!calculate(operand, pendingAdditiveOperator)) {
            abortOperation();
            return;
        }
        display->setText(QString::number(sumSoFar));
    } else {
        sumSoFar = operand;
    }

    pendingAdditiveOperator = clickedOperator;
    waitingForOperand = true;
}

void Calculator::multiplicativeOperatorClicked()
{
    QLineEdit *display = ui->editDisplay;
    QPushButton *clickedButton = qobject_cast<QPushButton *>(sender());
    QString clickedOperator = clickedButton->text();
    double operand = display->text().toDouble();

    if (!pendingMultiplicativeOperator.isEmpty()) {
        if (!calculate(operand, pendingMultiplicativeOperator)) {
            abortOperation();
            return;
        }
        display->setText(QString::number(factorSoFar));
    } else {
        factorSoFar = operand;
    }

    pendingMultiplicativeOperator = clickedOperator;
    waitingForOperand = true;
}

void Calculator::equalClicked()
{
    QLineEdit *display = ui->editDisplay;
    double operand = display->text().toDouble();

    if (!pendingMultiplicativeOperator.isEmpty()) {
        if (!calculate(operand, pendingMultiplicativeOperator)) {
            abortOperation();
            return;
        }
        operand = factorSoFar;
        factorSoFar = 0.0;
    }

    if (!pendingAdditiveOperator.isEmpty()) {
        if (!calculate(operand, pendingAdditiveOperator)) {
            abortOperation();
            return;
        }
    } else {
        sumSoFar = operand;
    }

    display->setText(QString::number(sumSoFar));
    sumSoFar = 0.0;
    factorSoFar = 0.0;
    pendingMultiplicativeOperator.clear();
    pendingAdditiveOperator.clear();
    waitingForOperand = true;

}

void Calculator::dotClicked()
{
    qDebug() << tr(". ë‹¨ì¶”ê°€ ëˆŒë¦¬ì› ìŠµë‹ˆë‹¤.");
}

void Calculator::backspaceClicked()
{
    if (waitingForOperand)
        return;

    QString text = ui->editDisplay->text();
    text.chop(1);
    if (text.isEmpty()) {
        text = "0";
        waitingForOperand = true;
    }
    ui->editDisplay->setText(text);
}

void Calculator::clear()
{
    if (waitingForOperand)
        return;

    ui->editDisplay->setText("0");
    waitingForOperand = true;
}

void Calculator::clearAll()
{
    sumSoFar = 0.0;
    factorSoFar = 0.0;
    pendingAdditiveOperator.clear();
    pendingMultiplicativeOperator.clear();
    ui->editDisplay->setText("0");
    waitingForOperand = true;
}

void Calculator::abortOperation()
{
    clearAll();
    ui->editDisplay->setText(tr("####"));
}0
