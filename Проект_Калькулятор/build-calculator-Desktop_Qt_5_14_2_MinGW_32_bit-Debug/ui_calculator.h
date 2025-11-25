/********************************************************************************
** Form generated from reading UI file 'calculator.ui'
**
** Created by: Qt User Interface Compiler version 5.14.2
**
** WARNING! All changes made in this file will be lost when recompiling UI file!
********************************************************************************/

#ifndef UI_CALCULATOR_H
#define UI_CALCULATOR_H

#include <QtCore/QVariant>
#include <QtWidgets/QApplication>
#include <QtWidgets/QHBoxLayout>
#include <QtWidgets/QLineEdit>
#include <QtWidgets/QMainWindow>
#include <QtWidgets/QMenuBar>
#include <QtWidgets/QPushButton>
#include <QtWidgets/QStatusBar>
#include <QtWidgets/QVBoxLayout>
#include <QtWidgets/QWidget>

QT_BEGIN_NAMESPACE

class Ui_Calculator
{
public:
    QWidget *centralwidget;
    QVBoxLayout *verticalLayout;
    QLineEdit *editDisplay;
    QHBoxLayout *horizontalLayout;
    QPushButton *btnClearAll;
    QPushButton *btnClear;
    QPushButton *btnBackspace;
    QPushButton *btnPlus;
    QHBoxLayout *horizontalLayout_2;
    QPushButton *btn7;
    QPushButton *btn8;
    QPushButton *btn9;
    QPushButton *btnMinus;
    QHBoxLayout *horizontalLayout_3;
    QPushButton *btn4;
    QPushButton *btn5;
    QPushButton *btn6;
    QPushButton *btnMultiply;
    QHBoxLayout *horizontalLayout_4;
    QPushButton *btn1;
    QPushButton *btn2;
    QPushButton *btn3;
    QPushButton *btnDivide;
    QHBoxLayout *horizontalLayout_5;
    QPushButton *btn0;
    QPushButton *btnDot;
    QPushButton *btnEqual;
    QMenuBar *menubar;
    QStatusBar *statusbar;

    void setupUi(QMainWindow *Calculator)
    {
        if (Calculator->objectName().isEmpty())
            Calculator->setObjectName(QString::fromUtf8("Calculator"));
        Calculator->resize(410, 485);
        QFont font;
        font.setPointSize(10);
        Calculator->setFont(font);
        centralwidget = new QWidget(Calculator);
        centralwidget->setObjectName(QString::fromUtf8("centralwidget"));
        verticalLayout = new QVBoxLayout(centralwidget);
        verticalLayout->setObjectName(QString::fromUtf8("verticalLayout"));
        editDisplay = new QLineEdit(centralwidget);
        editDisplay->setObjectName(QString::fromUtf8("editDisplay"));
        QSizePolicy sizePolicy(QSizePolicy::Expanding, QSizePolicy::Expanding);
        sizePolicy.setHorizontalStretch(0);
        sizePolicy.setVerticalStretch(0);
        sizePolicy.setHeightForWidth(editDisplay->sizePolicy().hasHeightForWidth());
        editDisplay->setSizePolicy(sizePolicy);
        QFont font1;
        font1.setPointSize(22);
        editDisplay->setFont(font1);
        editDisplay->setAlignment(Qt::AlignRight|Qt::AlignTrailing|Qt::AlignVCenter);
        editDisplay->setReadOnly(true);

        verticalLayout->addWidget(editDisplay);

        horizontalLayout = new QHBoxLayout();
        horizontalLayout->setObjectName(QString::fromUtf8("horizontalLayout"));
        btnClearAll = new QPushButton(centralwidget);
        btnClearAll->setObjectName(QString::fromUtf8("btnClearAll"));
        sizePolicy.setHeightForWidth(btnClearAll->sizePolicy().hasHeightForWidth());
        btnClearAll->setSizePolicy(sizePolicy);

        horizontalLayout->addWidget(btnClearAll);

        btnClear = new QPushButton(centralwidget);
        btnClear->setObjectName(QString::fromUtf8("btnClear"));
        sizePolicy.setHeightForWidth(btnClear->sizePolicy().hasHeightForWidth());
        btnClear->setSizePolicy(sizePolicy);

        horizontalLayout->addWidget(btnClear);

        btnBackspace = new QPushButton(centralwidget);
        btnBackspace->setObjectName(QString::fromUtf8("btnBackspace"));
        sizePolicy.setHeightForWidth(btnBackspace->sizePolicy().hasHeightForWidth());
        btnBackspace->setSizePolicy(sizePolicy);

        horizontalLayout->addWidget(btnBackspace);

        btnPlus = new QPushButton(centralwidget);
        btnPlus->setObjectName(QString::fromUtf8("btnPlus"));
        sizePolicy.setHeightForWidth(btnPlus->sizePolicy().hasHeightForWidth());
        btnPlus->setSizePolicy(sizePolicy);

        horizontalLayout->addWidget(btnPlus);


        verticalLayout->addLayout(horizontalLayout);

        horizontalLayout_2 = new QHBoxLayout();
        horizontalLayout_2->setObjectName(QString::fromUtf8("horizontalLayout_2"));
        btn7 = new QPushButton(centralwidget);
        btn7->setObjectName(QString::fromUtf8("btn7"));
        sizePolicy.setHeightForWidth(btn7->sizePolicy().hasHeightForWidth());
        btn7->setSizePolicy(sizePolicy);

        horizontalLayout_2->addWidget(btn7);

        btn8 = new QPushButton(centralwidget);
        btn8->setObjectName(QString::fromUtf8("btn8"));
        sizePolicy.setHeightForWidth(btn8->sizePolicy().hasHeightForWidth());
        btn8->setSizePolicy(sizePolicy);

        horizontalLayout_2->addWidget(btn8);

        btn9 = new QPushButton(centralwidget);
        btn9->setObjectName(QString::fromUtf8("btn9"));
        sizePolicy.setHeightForWidth(btn9->sizePolicy().hasHeightForWidth());
        btn9->setSizePolicy(sizePolicy);

        horizontalLayout_2->addWidget(btn9);

        btnMinus = new QPushButton(centralwidget);
        btnMinus->setObjectName(QString::fromUtf8("btnMinus"));
        sizePolicy.setHeightForWidth(btnMinus->sizePolicy().hasHeightForWidth());
        btnMinus->setSizePolicy(sizePolicy);

        horizontalLayout_2->addWidget(btnMinus);


        verticalLayout->addLayout(horizontalLayout_2);

        horizontalLayout_3 = new QHBoxLayout();
        horizontalLayout_3->setObjectName(QString::fromUtf8("horizontalLayout_3"));
        btn4 = new QPushButton(centralwidget);
        btn4->setObjectName(QString::fromUtf8("btn4"));
        sizePolicy.setHeightForWidth(btn4->sizePolicy().hasHeightForWidth());
        btn4->setSizePolicy(sizePolicy);

        horizontalLayout_3->addWidget(btn4);

        btn5 = new QPushButton(centralwidget);
        btn5->setObjectName(QString::fromUtf8("btn5"));
        sizePolicy.setHeightForWidth(btn5->sizePolicy().hasHeightForWidth());
        btn5->setSizePolicy(sizePolicy);

        horizontalLayout_3->addWidget(btn5);

        btn6 = new QPushButton(centralwidget);
        btn6->setObjectName(QString::fromUtf8("btn6"));
        sizePolicy.setHeightForWidth(btn6->sizePolicy().hasHeightForWidth());
        btn6->setSizePolicy(sizePolicy);

        horizontalLayout_3->addWidget(btn6);

        btnMultiply = new QPushButton(centralwidget);
        btnMultiply->setObjectName(QString::fromUtf8("btnMultiply"));
        sizePolicy.setHeightForWidth(btnMultiply->sizePolicy().hasHeightForWidth());
        btnMultiply->setSizePolicy(sizePolicy);

        horizontalLayout_3->addWidget(btnMultiply);


        verticalLayout->addLayout(horizontalLayout_3);

        horizontalLayout_4 = new QHBoxLayout();
        horizontalLayout_4->setObjectName(QString::fromUtf8("horizontalLayout_4"));
        btn1 = new QPushButton(centralwidget);
        btn1->setObjectName(QString::fromUtf8("btn1"));
        sizePolicy.setHeightForWidth(btn1->sizePolicy().hasHeightForWidth());
        btn1->setSizePolicy(sizePolicy);

        horizontalLayout_4->addWidget(btn1);

        btn2 = new QPushButton(centralwidget);
        btn2->setObjectName(QString::fromUtf8("btn2"));
        sizePolicy.setHeightForWidth(btn2->sizePolicy().hasHeightForWidth());
        btn2->setSizePolicy(sizePolicy);

        horizontalLayout_4->addWidget(btn2);

        btn3 = new QPushButton(centralwidget);
        btn3->setObjectName(QString::fromUtf8("btn3"));
        sizePolicy.setHeightForWidth(btn3->sizePolicy().hasHeightForWidth());
        btn3->setSizePolicy(sizePolicy);

        horizontalLayout_4->addWidget(btn3);

        btnDivide = new QPushButton(centralwidget);
        btnDivide->setObjectName(QString::fromUtf8("btnDivide"));
        sizePolicy.setHeightForWidth(btnDivide->sizePolicy().hasHeightForWidth());
        btnDivide->setSizePolicy(sizePolicy);

        horizontalLayout_4->addWidget(btnDivide);


        verticalLayout->addLayout(horizontalLayout_4);

        horizontalLayout_5 = new QHBoxLayout();
        horizontalLayout_5->setObjectName(QString::fromUtf8("horizontalLayout_5"));
        btn0 = new QPushButton(centralwidget);
        btn0->setObjectName(QString::fromUtf8("btn0"));
        sizePolicy.setHeightForWidth(btn0->sizePolicy().hasHeightForWidth());
        btn0->setSizePolicy(sizePolicy);

        horizontalLayout_5->addWidget(btn0);

        btnDot = new QPushButton(centralwidget);
        btnDot->setObjectName(QString::fromUtf8("btnDot"));
        sizePolicy.setHeightForWidth(btnDot->sizePolicy().hasHeightForWidth());
        btnDot->setSizePolicy(sizePolicy);

        horizontalLayout_5->addWidget(btnDot);

        btnEqual = new QPushButton(centralwidget);
        btnEqual->setObjectName(QString::fromUtf8("btnEqual"));
        QSizePolicy sizePolicy1(QSizePolicy::Expanding, QSizePolicy::Expanding);
        sizePolicy1.setHorizontalStretch(2);
        sizePolicy1.setVerticalStretch(0);
        sizePolicy1.setHeightForWidth(btnEqual->sizePolicy().hasHeightForWidth());
        btnEqual->setSizePolicy(sizePolicy1);

        horizontalLayout_5->addWidget(btnEqual);


        verticalLayout->addLayout(horizontalLayout_5);

        Calculator->setCentralWidget(centralwidget);
        menubar = new QMenuBar(Calculator);
        menubar->setObjectName(QString::fromUtf8("menubar"));
        menubar->setGeometry(QRect(0, 0, 410, 29));
        Calculator->setMenuBar(menubar);
        statusbar = new QStatusBar(Calculator);
        statusbar->setObjectName(QString::fromUtf8("statusbar"));
        Calculator->setStatusBar(statusbar);

        retranslateUi(Calculator);

        QMetaObject::connectSlotsByName(Calculator);
    } // setupUi

    void retranslateUi(QMainWindow *Calculator)
    {
        Calculator->setWindowTitle(QCoreApplication::translate("Calculator", "Calculator", nullptr));
        editDisplay->setText(QCoreApplication::translate("Calculator", "0", nullptr));
        btnClearAll->setText(QCoreApplication::translate("Calculator", "Clear All", nullptr));
        btnClear->setText(QCoreApplication::translate("Calculator", "Clear", nullptr));
        btnBackspace->setText(QCoreApplication::translate("Calculator", "Backspace", nullptr));
        btnPlus->setText(QCoreApplication::translate("Calculator", "+", nullptr));
        btn7->setText(QCoreApplication::translate("Calculator", "7", nullptr));
        btn8->setText(QCoreApplication::translate("Calculator", "8", nullptr));
        btn9->setText(QCoreApplication::translate("Calculator", "9", nullptr));
        btnMinus->setText(QCoreApplication::translate("Calculator", "-", nullptr));
        btn4->setText(QCoreApplication::translate("Calculator", "4", nullptr));
        btn5->setText(QCoreApplication::translate("Calculator", "5", nullptr));
        btn6->setText(QCoreApplication::translate("Calculator", "6", nullptr));
        btnMultiply->setText(QCoreApplication::translate("Calculator", "*", nullptr));
        btn1->setText(QCoreApplication::translate("Calculator", "1", nullptr));
        btn2->setText(QCoreApplication::translate("Calculator", "2", nullptr));
        btn3->setText(QCoreApplication::translate("Calculator", "3", nullptr));
        btnDivide->setText(QCoreApplication::translate("Calculator", "/", nullptr));
        btn0->setText(QCoreApplication::translate("Calculator", "0", nullptr));
        btnDot->setText(QCoreApplication::translate("Calculator", ".", nullptr));
        btnEqual->setText(QCoreApplication::translate("Calculator", "=", nullptr));
    } // retranslateUi

};

namespace Ui {
    class Calculator: public Ui_Calculator {};
} // namespace Ui

QT_END_NAMESPACE

#endif // UI_CALCULATOR_H
