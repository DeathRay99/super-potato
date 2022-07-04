#include <iostream>
#include <cstdio>
#include <fstream>
#include <string>
#include <stdlib.h>
#include <map>
using namespace std;
int r, option;
long long no;
class cityinfo
{
    double total_bill;

public:
    void roadtravel(int rd)
    {
        int roadcost;
        int car_name;
        //road travel algo
        cout << "rate per kilometer in sedan: rs.3" << endl
             << "rate per kilometer in hatchback: rs 2" << endl
             << "rate per kilometer in SUV: rs 4" << endl;
        cout << "******************************************" << endl;
        cout << "By which car do you want to travel ?" << endl
             << "1.Sedan" << endl
             << "2.Hatchback" << endl
             << "3.SUV" << endl;
        cout << "Choose 1,2 or 3" << endl;
        cin >> car_name;
        switch (car_name)
        {
        case 1:
            roadcost = (rd)*3;
            break;
        case 2:
            roadcost = (rd)*2;
            break;
        case 3:
            roadcost = (rd)*4;
            break;
        }
        total_bill = people(roadcost);
        int otp;
        int temp = (no / 100000000) * 100 + (no % 100);
        fstream obj;
        obj.open("OTP.txt", ios::out);
        obj << "YOUR OTP IS : " << temp;
        obj.close();
    s:
        cout << "Enter the OTP sent to your mobile number : ";
        cin >> otp;
        if (otp == temp)
        {
            cout << "******************************************" << endl;
            cout << "Road fair confirmed  " << endl;
        }
        else
        {
            cout << "Wrong OTP Entered !!!!" << endl;
            cout << "Please enter correct OTP.......!" << endl;
            goto s;
        }
    }
    void airtravel(int itervalue) // iteration ki second value itervalue mei stored
    {                             //per km price of economy :15rs
        //per km price of business:25rs
        int airseat, airfare;
        cout << "******************************************" << endl;
        cout << "Which booking do you prefer ? " << endl;
        cout << "1. Economical" << endl;
        cout << "2. Business" << endl;
        cin >> airseat;
        switch (airseat)
        {
        case 1:
            airfare = itervalue * 15;
            break;
        default:
            airfare = itervalue * 25;
            break;
        }
        //airfare=__;
        int otp;
        total_bill = people(airfare);
        int temp = (no / 100000000) * 100 + (no % 100);
        fstream obj;
        obj.open("OTP.txt", ios::out);
        obj << "YOUR OTP IS : " << temp;
        obj.close();
    s:
        cout << "Enter the OTP sent to your mobile number : ";
        cin >> otp;
        if (otp == temp)
        {
            cout << "******************************************" << endl;
            cout << "Air ticket confirmed  " << endl;
        }
        else
        {
            cout << "Wrong OTP Entered !!!!" << endl;
            cout << "Please enter correct OTP.......!" << endl;
            goto s;
        }
        //cout<<airfare<<endl;
    }

    void travel(string city_backup)
    {
        /*string nh1,nh2,nh3,nh4,highw;
    cout<<city_backup<<" confirmed::enter route preferences :"<<endl;
    cin>>highw;*/
        map<string, int> distanceDom;
        distanceDom["GOA"] = 1898;
        distanceDom["MUMBAI"] = 1415;
        distanceDom["KANYAKUMARI"] = 2841;
        distanceDom["DEHRADUN"] = 247;
        distanceDom["KOLKATA"] = 1534;
        distanceDom["AHMEDABAD"] = 952;
        distanceDom["BANGLORE"] = 2176;
        distanceDom["CHENNAI"] = 2210;
        distanceDom["LADAKH"] = 965;
        distanceDom["SRINAGAR"] = 812;
        distanceDom["BHOPAL"] = 789;
        distanceDom["MANIPUR"] = 2425;
        distanceDom["JAIPUR"] = 281;
        distanceDom["HYDERABAD"] = 1586;
        map<string, int>::iterator iter1;
        for (iter1 = distanceDom.begin(); iter1 != distanceDom.end(); iter1++)
        {
            if (city_backup == (*iter1).first)
            {
                cout << (*iter1).second << "kms" << endl;
                cout << "******************************************" << endl;
                cout << "\nHow do you want to travel?\n\n1.Airways\n2.Roadways\nEnter option : " << endl;
                ;
                cin >> option;
                switch (option)
                {
                case 1:
                    airtravel((*iter1).second);
                    break;
                case 2:
                    roadtravel((*iter1).second);
                    break;
                }
            }
            else
                continue;
        }
        cout << "******************************************" << endl;
    }

    void distanceI(string word_back)
    {
        map<string, int> distance;
        distance["NEW-YORK"] = 12500;
        distance["SYDNEY"] = 9740;
        distance["SINGAPORE"] = 6004;
        distance["LONDON"] = 7481;
        distance["MALDIVES"] = 2030;
        distance["PARIS"] = 7329;
        distance["NEW-ZEALAND"] = 11963;
        distance["AMSTERDAM"] = 7132;
        distance["SWITZERLAND"] = 6902;
        distance["DUBAI"] = 2475;
        distance["CANADA"] = 11462;

        //auto it= distance.find("CANADA");
        //cout<<it->second<<endl;

        //iter.first,iter.second

        map<string, int>::iterator iter;
        for (iter = distance.begin(); iter != distance.end(); iter++)
        {
            if (word_back == (*iter).first)
            {
                cout << (*iter).second << "kms" << endl;
                airtravel((*iter).second);
            }
            else
                continue;
        }
    }

    int people(int cost)
    {
        int npeople, nfactor;
        cout << "How many people are travelling including you ?" << endl;
        cin >> npeople;
        nfactor = npeople * cost;
        cout << "Cost of tickets = Rs. " << nfactor << " confirmed" << endl;
        cout << "******************************************" << endl;
        return nfactor;
    }
    friend class bill;
};
class QUICK_NAVIGATION
{
    double total;

public:
    void car1(string carl)
    {
        string a1 = "sedan";
        string a2 = "hatchback";
        string a3 = "SUV";
        cout << "rate per kilometer in sedan: rs.7" << endl
             << "rate per kilometer in hatchback: rs 6" << endl
             << "rate per kilometer in SUV: rs 8" << endl;
        cout << "Note: Cost per kilometer for each car is including quick navigation tax" << endl;
        if (carl == a1)
        {
            cout << carl << " confirmed" << endl;
            cout << "Your car rent is Rs." << r * 7 << endl;
            total = r * 7;
        }
        else if (carl == a2)
        {
            cout << carl << " confirmed" << endl;
            cout << "Your car rent is Rs." << r * 6 << endl;
            total = r * 6;
        }
        else if (carl == a3)
        {
            cout << carl << " confirmed" << endl;
            cout << "Your car rent is Rs." << r * 8 << endl;
            total = r * 8;
        }
        cout << "******************************************" << endl;
    }

    void car(string car1)
    {
        string a1 = "sedan";
        string a2 = "hatchback";
        string a3 = "SUV";
        if (car1 == a1 || car1 == a2 || car1 == a3)
        {
            cout << car1 << " confirmed" << endl;
        }
        else
        {
            cout << "sorry the inputted vehicle is not available" << endl;
            exit(0);
        }
        cout << "******************************************" << endl;
    }
    void distance_quicknav(string quickdis)
    {
        map<string, int> distanceNav;
        distanceNav["GOA"] = 1898;
        distanceNav["MUMBAI"] = 1415;
        distanceNav["KANYAKUMARI"] = 2841;
        distanceNav["DEHRADUN"] = 247;
        distanceNav["KOLKATA"] = 1534;
        distanceNav["AHMEDABAD"] = 952;
        distanceNav["BANGLORE"] = 2176;
        distanceNav["CHENNAI"] = 2210;
        distanceNav["LADAKH"] = 965;
        distanceNav["SRINAGAR"] = 812;
        distanceNav["BHOPAL"] = 789;
        distanceNav["MANIPUR"] = 2425;
        distanceNav["JAIPUR"] = 281;
        distanceNav["HYDERABAD"] = 1586;
        map<string, int>::iterator iterNav;
        for (iterNav = distanceNav.begin(); iterNav != distanceNav.end(); iterNav++)
        {
            if (quickdis == (*iterNav).first)
            {
                cout << (*iterNav).second << "kms" << endl;
                r = (*iterNav).second;
            }
            else
                continue;
        }
    }
    friend class bill;
};

class Menu : public cityinfo, public QUICK_NAVIGATION
{
    char choice;
    string name;
    string city_input;

public:
    char A, B;
    int choice1;
    // press 1 for further option,else press 0 for quit, press 2 for previous option
    void printTerminlBanner()
    {

        cout << "888       888 8888888888 888      .d8888b.   .d88888b.  888b     d888 8888888888      88888888888 .d88888b.  " << endl;
        cout << "888   o   888 888        888     d88P  Y88b d88P   Y88b 8888b   d8888 888                 888    d88P   Y88b " << endl;
        cout << "888  d8b  888 888        888     888    888 888     888 88888b.d88888 888                 888    888     888 " << endl;
        cout << "888 d888b 888 8888888    888     888        888     888 888Y88888P888 8888888             888    888     888 " << endl;
        cout << "888d88888b888 888        888     888        888     888 888 Y888P 888 888                 888    888     888 " << endl;
        cout << "88888P Y88888 888        888     888    888 888     888 888  Y8P  888 888                 888    888     888 " << endl;
        cout << "8888P   Y8888 888        888     Y88b  d88P Y88b. .d88P 888   ..  888 888                 888    Y88b. .d88P " << endl;
        cout << "888P     Y888 8888888888 88888888  Y8888P     Y88888P   888       888 8888888888          888      Y88888P   " << endl;

        cout << endl
             << endl;

        cout << "88888888888 8888888b.         d8888 888     888 8888888888 888                  d8888  .d8888b.  8888888888 888b    888  .d8888b. Y88b   d88P " << endl;
        cout << "    888     888   Y88b       d88888 888     888 888        888                 d88888 d88P  Y88b 888        8888b   888 d88P  Y88b Y88b d88P  " << endl;
        cout << "    888     888    888      d88P888 888     888 888        888                d88P888 888    888 888        88888b  888 888    888  Y88o88P   " << endl;
        cout << "    888     888   d88P     d88P 888 Y88b   d88P 8888888    888               d88P 888 888        8888888    888Y88b 888 888          Y888P    " << endl;
        cout << "    888     8888888P      d88P  888  Y88b d88P  888        888              d88P  888 888  88888 888        888 Y88b888 888           888     " << endl;
        cout << "    888     888 T88b     d88P   888   Y88o88P   888        888             d88P   888 888    888 888        888  Y88888 888    888    888     " << endl;
        cout << "    888     888  T88b   d8888888888    Y888P    888        888            d8888888888 Y88b  d88P 888        888   Y8888 Y88b  d88P    888     " << endl;
        cout << "    888     888   T88b d88P     888     Y8P     8888888888 88888888      d88P     888   Y8888P88 8888888888 888    Y888   Y8888P      888     " << endl;

        cout << endl
             << endl
             << endl
             << endl;
        cout << "*************************************************************TERMS AND CONDITONS FOR TRAVEL MANAGEMENT AGENCY*************************************************" << endl;
        cout << "1.  There are pathways restricted to two travel preferences which may be adjusted and variated with respect to your comfort, they are detailed menu navigation" << endl;
        cout << "    and quick menu navigation." << endl;
        cout << "2.  For international travel, since road travelling isn't an option hereby only airtravel is available (sea travel is under developement)" << endl;
        cout << "3.  For domestic travel preferences, locking of both airtravel as well as road travel are available justified to the customer's use and budget." << endl;
        cout << "4.  Since there is a road tax, fuel refilling and car maintenance, all cumulative to the road fare of respective vehicles(sedan, hatchback and SUV)" << endl;
        cout << "5.  Cumulative result is formulated as follows " << endl;
        cout << "		   ROADCOST = ROADFARE*(TOTAL KILOMETERS TRAVELLED BY THE VEHICLE)*(TOTAL NUMBER OF PASSENGERS TRAVELLING)" << endl;
        cout << "6.  Air travel is justified by the following formula" << endl;
        cout << "		   AIRCOST = AIRFARE*(TOTAL DISTANCE BETWEEN DESTINATION)*(ECONOMIC/BUSINESS PREFERENCE)" << endl;
        cout << "7.  There are several restrictions, making your experience easier and enjoyable. The International and the domestic locations are offered only in the defined" << endl;
        cout << "    list made by the agent." << endl;
        cout << "8.  Booking whether air/road is done strictly at the base centre to avoid complexity." << endl;
        cout << "9.  The base location is selected as NEW DELHI and all the boarding flights as well as road travel tours will begin from there itself." << endl;
        cout << "10. To avoid confusion and for saving the time of the customer, a quick menu navigation has also been made for the sake of booking in time-saving efficient terms." << endl;
        cout << "11. As for the bill procedures, a cumulative reciept will be allocated for the whole adjustment made by the user and it will be displayed at the end." << endl;
        cout << "12. As per our service and management, there is a 15% cut on the cumulative bill." << endl;
        cout << "13. The service cost is strictly NON-NEGOTIABLE and NON-ADJUSTABLE." << endl;
        cout << "14. Reciept payment is strictly NON-REFUNDABLE." << endl;
        cout << endl
             << endl
             << endl
             << endl;
        string termsch;
        cout << "If you want to continue enter YES else NO, selecting yes refers to accepting T&C" << endl;
        cin >> termsch;
        if (termsch == "NO" || termsch == "no")
        {
            exit(0);
        }
    }

    void printStatementsAgent(string input)
    {
        cout << "******************************************" << endl;
        cout << "Agent: " << input << endl;
        cout << "******************************************" << endl;
    }

    string printStatementsUser()
    {
        string stringInput;
        cout << "******************************************" << endl;
        cout << "UserInput: ";
        cin >> stringInput;
        cout << "******************************************" << endl;

        return stringInput;
    }

    void display()
    {
        // cout<<"welcome to Travel management agency"<<endl;
        printTerminlBanner();
        printStatementsAgent("Please enter your name");
        //cin>>name[300];
        name = printStatementsUser();
        cout << "Enter your mobile number : " << endl;
        cin >> no;
        cout << "******************************************" << endl;
        cout << "hi " << name << " would you like a " << endl;
        cout << "A.) Detailed menu drive" << endl;
        cout << "B.) Quick navigation" << endl;
        printStatementsAgent("Choose A or B");
        cin >> choice;
        switch (choice)
        {
        case 'A':
            cout << "This is the detailed menu navigation" << endl;
            cout << "1.) International" << endl;
            cout << "2.) Domestic" << endl;
            cout << "Choose 1 or 2" << endl;
            cin >> choice1;
            if (choice1 == 1)
            {
                fstream fout1;
                fout1.open("INTERNATIONAL_LOCATIONS.txt", ios::in);
                if (!fout1)
                {
                    cout << "file opening failed" << endl;
                }
                else
                {
                    cout << "******************************************" << endl;
                    string word1;
                    while (fout1 >> word1)
                    {
                        // displaying content
                        cout << word1 << endl;
                        //price(word);
                    }
                    fout1.close();
                    cout << "******************************************" << endl;
                    cout << "enter your choice of destination" << endl;
                    cin >> city_input;
                    //fout.seekg(0,ios::beg);
                    fout1.open("INTERNATIONAL_LOCATIONS.txt", ios::in);
                    int flag1 = 0;
                    while (fout1 >> word1)
                    {
                        if (city_input == word1)
                        //if((strcmpi(city_input,word))==0)
                        {
                            flag1 = 1;
                            break;
                        }
                        else if (city_input == word1)
                        {
                            continue;
                        }
                        /*else
                             {
                                break;
                             }*/
                        // displaying content
                        //cout << word << endl;
                        //price(word);
                    }
                    if (flag1 == 1)
                    {
                        cout << city_input << " destination confirmed" << endl;
                        //airtravel(city_input1);
                        distanceI(word1);
                        cout << "******************************************" << endl;
                    }
                    else
                    {
                        cout << "not defined destination" << endl;
                        cout << "******************************************" << endl;
                    }
                }
                fout1.close();
            }
            else
            {
                fstream fout;
                fout.open("INDIAN_LOCATION.txt", ios::in);
                if (!fout)
                {
                    cout << "file opening failed" << endl;
                }
                else
                {
                    cout << "******************************************" << endl;
                    string word;
                    while (fout >> word)
                    {
                        // displaying content
                        cout << word << endl;
                        //price(word);
                    }
                    cout << "******************************************" << endl;
                    fout.close();
                    cout << "enter your choice of destination" << endl;
                    cin >> city_input;

                    //fout.seekg(0,ios::beg);
                    fout.open("INDIAN_LOCATION.txt", ios::in);
                    int flag = 0;
                    while (fout >> word)
                    {
                        if (city_input == word)
                        //if((strcmpi(city_input,word))==0)
                        {
                            flag = 1;
                            break;
                        }
                        else if (city_input != word)
                        {
                            continue;
                        }
                        /*else
                             {
                                break;
                             }*/
                        // displaying content
                        //cout << word << endl;
                        //price(word);
                    }
                    fout.close();
                    if (flag == 1)
                    {
                        cout << city_input << " city confirmed" << endl;
                        travel(city_input);
                        cout << "******************************************" << endl;
                    }
                    else
                    {
                        cout << "not defined city" << endl;
                        cout << "******************************************" << endl;
                    }

                    /*if(city_input==word)
                        {

                        }
                        */

                    /*while(fout)
                        {
                            //st=fout.get();
                            //cout<<st;
                        }*/
                }
            }
            break;
        case 'B':
            string car_1, dis;
            cout << "This is the quick menu navigation(only for domestic)" << endl;
            //fflush(stdin);
            //gets(car_1);
            cout << "enter car preference: " << endl;
            cin >> car_1;
            car(car_1);
            cout << "******************************************" << endl;
            cout << "which place do you want to go to?" << endl;
            cin >> city_input;
            fstream fout;
            string word;
            fout.open("INDIAN_LOCATION.txt", ios::in);
            int flag = 0;
            while (fout >> word)
            {
                if (city_input == word)
                {
                    flag = 1;
                    break;
                }
                else if (city_input != word)
                {
                    continue;
                }
            }
            fout.close();
            if (flag == 1)
            {
                cout << city_input << " destination confirmed" << endl;
                cout << "******************************************" << endl;
            }
            else
            {
                cout << "sorry for the inconvenience, our services aren't available in the inputted destination" << endl;
                exit(0);
            }
            cout << "distance from your inputted location" << endl;
            //travel(pl);
            distance_quicknav(city_input);
            cout << "******************************************" << endl;
            car1(car_1);
            int otp;
            int temp = (no / 100000000) * 100 + (no % 100);
            fstream obj;
            obj.open("OTP.txt", ios::out);
            obj << "YOUR OTP IS : " << temp;
            obj.close();
        s:
            cout << "Enter the OTP sent to your mobile number : ";
            cin >> otp;
            if (otp == temp)
            {
                cout << "******************************************" << endl;
                cout << "Booking confirmed" << endl;
            }
            else
            {
                cout << "Wrong OTP Entered !!!!" << endl;
                cout << "Please enter correct OTP.......!" << endl;
                goto s;
            }
            break;
        }
    }
    friend class bill;
};
class bill : public Menu
{
public:
    void calculateDETAIL()
    {
        double t;
        fstream fout2;
        fout2.open("Bill.txt", ios::out);
        fout2 << "Name of the person : " << name << endl;
        fout2 << "Mobile Number : " << no << endl;
        fout2 << "You are visiting :" << city_input << endl;
        if (choice == 'A')
        {
            if (choice1 == 1)
            {
                fout2 << "You are travelling via Airways" << endl;
            }
            else if (choice1 == 2)
            {
                if (option == 1)
                {
                    fout2 << "You are travelling via Airways" << endl;
                }
                else
                {
                    fout2 << "You are travelling via Roadways" << endl;
                }
            }
            t = total_bill;
        }
        else if (choice == 'B')
        {
            fout2 << "You are travelling via roadways" << endl;
            t = total;
        }
        fout2 << "Service tax is Rs.999" << endl;
        fout2 << "You have to pay " << t + 999 << endl;
        fout2 << "    wishing you a safe journey";
        fout2.close();
    }
    void TOTAL_BILL()
    {
        double t;
        fstream fout3;
        fout3.open("total_bill.txt", ios::out | ios::app);
        fout3 << "\n\nName of the person : " << name << endl;
        fout3 << "Mobile Number : " << no << endl;
        fout3 << "You are visiting :" << city_input << endl;
        if (choice == 'A')
        {
            if (choice1 == 1)
            {
                fout3 << "You are travelling via Airways" << endl;
            }
            else if (choice1 == 2)
            {
                if (option == 1)
                {
                    fout3 << "You are travelling via Airways" << endl;
                }
                else
                {
                    fout3 << "You are travelling via Roadways" << endl;
                }
            }
            t = total_bill;
        }
        else if (choice == 'B')
        {
            fout3 << "You are travelling via roadways" << endl;
            t = total;
        }
        fout3 << "Your total bill is Rs." << t << endl;
        fout3 << "Service tax is Rs.999" << endl;
        fout3 << "You have to pay " << t + 999 << endl;
        fout3 << "    wishing you a safe journey";
        fout3.close();
    }
};
int main()
{
    int no;
    int i = 0;
    cout << "How many tickets do you want?" << endl;
    cin >> no;
    bill ob[no];
    for (i; i < no; i++)
    {
        ob[i].display();
        ob[i].calculateDETAIL();
        ob[i].TOTAL_BILL();
    }
}
