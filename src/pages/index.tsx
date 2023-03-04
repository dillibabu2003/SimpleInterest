import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import Input from "../Components/Input.jsx";
import LineChart from "../Components/LineChart.jsx";
import DoughnutChart from "@/Components/DoughnutChart.jsx";
import CollapsibleBox from "@/Components/CollapsibleBox.jsx";
import RelatedCalculator from "@/Components/RelatedCalculator.jsx";
import { FaChartPie, FaChartLine } from "react-icons/fa";
import { MdOutlineShowChart } from "react-icons/md";

export default function Home() {
  const [totalInvestment, settotalInvestment] = useState(100000);
  const [interestRate, setinterestRate] = useState(5);
  const [timePeriod, settimePeriod] = useState(5);
  
  let simpleInterest = 0;
  const [output, setOutput] = useState(25000);
  const [totalAmount, settotalAmount] = useState(125000);

  const [isLineChart, setCheck] = useState(true);
  const [graphPoints, setGraphPoints] = useState([5000, 10000, 15000, 20000, 25000]);
  
  function calculate() {
    simpleInterest = (totalInvestment*interestRate*timePeriod)/100;
    if (simpleInterest === Infinity || isNaN(simpleInterest)) {
      setOutput(0);
    }
    else {
      setOutput(simpleInterest);
    }
    settotalAmount(simpleInterest+totalInvestment);
    
    calculateGraphPoints();
  }


  function calculateGraphPoints() {
    let points = [];
    for (let i = 1; i <= timePeriod; i++) {
      points.push((totalInvestment*interestRate*i)/100);
    }
    setGraphPoints(points);
  }

  return (
    <>
      <Head>
        <title>Simple Interest Calculator</title>
        <link rel="icon" href="./logo.png" />
        <link href="/dist/output.css" rel="stylesheet" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          rel="stylesheet"
          as="font"
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700&amp;family=Rubik:wght@400;500;600&amp;display=swap"
        />
        <meta name="description" content="CAGR Calculator" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* Background image */}
      <div
        className={
          "bg-bg_image w-full h-full bg-center bg-cover object-cover fixed"
        }
      />

      <main
        className={
          "relative [@media(max-width:1200px)]:p-5 [@media(min-width:1200px)]:p-20 w-full overflow-x-hidden flex-col justify-between text-neutral-700"
        }
      >
        <div>
          {/* Heading */}
          <div
            className={
              "text-zinc-900 text-5xl font-semibold text-center leading-tight [@media(max-width:300px)]:text-3xl"
            }
          >
            <span className={"text-blue-600"}>Simple Interest</span>{" "}
            Calculator
          </div>
          {/* Subheading */}
          <p className={"text-neutral-700 mt-3 [@media(min-width:200px)]:text-md [@media(max-width:300px)]:text-sm lg:text-lg text-center  "}>
          Simple interest is a method of calculating interest over a deposit for a definite period of time.FundsIndia Simple Interest Calculator
          can be used to calculate your returns or the interest you owe
          </p>
        </div>

        {/* Calculator and side pannel */}
        <div
          className={
            "flex w-full xl:max-h-[403px] lg:max-h-[516px] mt-[50px] [@media(min-width:200px)]:gap-4 lg:justify-between [@media(max-width:1000px)]:flex-col md:flex-col lg:flex-row  "
          }
        >
          {/* Calculator and graph (WRAPPER) */}
          <div
            className={
              "flex [@media(max-width:1000px)]:flex-col flex-row [@media(min-width:200px)]:gap-10 p-[30px] [@media(max-width:1000px)]:w-[100%] lg:w-[75%] border-2 border-white rounded-[30px] shadow-md shadow-[#505C6227] bg-white bg-opacity-40 backdrop-blur-[30px]"
            }
          >
            {/* Calculator */}
            <div className={"text-left text-lg [@media(max-width:1000px)]:w-[100%] w-[50%] "}>
              {/* Input box wrapper */}
              <div
                className={
                  "flex flex-col font-medium space-y-[20px]"
                }
              >
                {/* Input box */}
                {/*input boxes*/}
                <div>
                  {/*Total investment block*/}
                  <div>Total investment</div>
                  <Input
                    id='initialInvestment'
                    type='rupees'
                    min={1000}
                    max={10000000}
                    step={1000}
                    value={totalInvestment}
                    setValue={settotalInvestment}
                  />
                </div>


                <div>
                  {/*Interest rate block*/}
                  <div>Interest rate(p.a.)</div>
                  <Input
                    id='finalInvestment'
                    type='percentage'
                    min={1}
                    max={20}
                    step={1}
                    value={interestRate}
                    setValue={setinterestRate}
                  />
                </div>

                <div>
                  {/*Time Period block*/}
                  <div>Time Period(Yrs)</div>
                  <Input
                    id='timePeriod'
                    min={1}
                    max={40}
                    value={timePeriod}
                    setValue={settimePeriod}
                  />
                </div>
              </div>

              {/* Control Box Wrapper */}
              <div
                className={
                  "flex flex-warp justify-center mt-[40px] cursor-pointer"
                }
              >
                {/* Control boxes */}
                <div
                  className={
                    "border-[0.1rem] border-dashed border-[#36b366] p-[4px] rounded-[35px] w-[65%]"
                  }
                >
                  <div
                    className={
                      "text-center text-white font-semibold rounded-[35px] p-[0.3rem] shadow-lg shadow-[#36b3665d] bg-[#00d382]"
                    }
                    onClick={calculate}
                  >
                    Calculate
                  </div>
                </div>
              </div>
            </div>

            {/* vertical line */}
            <div
              className={
                "-my-4 -mx-2 [@media(max-width:1000px)]:-mx-2  [@media(max-width:1000px)]:h-0 [@media(max-width:1000px)]:w-auto lg:h-auto lg:w-0 rounded-[50px] border-2 border-solid border-[#7070701A]"
              }
            ></div>

            {/* Charts/Graph wrapper */}
            <div className={"[@media(max-width:1000px)]:w-[100%] lg:w-[50%]"}>
              {/* Toggle Button */}
              <div
                className={
                  " absolute flex flex-wrap z-10 place-content-center  w-[61px] h-[33px]  rounded-[30px] border-2 border-solid border-white bg-[#505C6227] shadow-md shadow-[#505C6227] backdrop-blur-[30px] m-0"
                }
              >
                <button
                  className={
                    isLineChart
                      ? " w-[23px] h-[23px] rounded-[50px] text-white bg-[#0161FF] border-2 border-solid border-white p-[2px] mx-[1px]"
                      : " w-[23px] h-[23px] rounded-[50px] p-[2px] text-[#909090] mx-[1px]"
                  }
                  onClick={() => {
                    setCheck(true);
                  }}
                >
                  <MdOutlineShowChart />
                </button>
                <button
                  className={
                    isLineChart
                      ? " w-[23px] h-[23px] rounded-[50px] p-[2px] text-[#909090] mx-[1px]"
                      : " w-[23px] h-[23px] rounded-[50px] text-white bg-[#0161FF] border-2 border-solid border-white p-[2px] mx-[1px]"
                  }
                  onClick={() => {
                    setCheck(false);
                  }}
                >
                  <FaChartPie />
                </button>
              </div>

              {/* Charts/Graph */}
              <div className={" relative object-right-top [@media(min-width:200px)]:h-auto md:w-[100%]"}>
                {isLineChart ? (
                  <>
                    <LineChart points={graphPoints} />
                    <div className={"mb-3"}>
                      for an investment of {" "}
                      <span className={"font-semibold"}>
                      ₹{totalInvestment.toLocaleString("en-In")}
                      </span>{" "}at {interestRate}% simple interest for a period of
                       {" "}
                      <span className={"font-semibold"}>
                        {timePeriod}
                      </span>{" "}
                      years,{" "}the simple interest earned will be
                      <span className={"font-semibold"}>
                      ₹{output.toLocaleString("en-In")}
                      </span>
                    </div>
                  </>
                ) : (
                  <>
                    <DoughnutChart
                      totalInterestAmount={output} totalInvestmentAmount={totalInvestment} dependency={output} 
                    />
                    <div className={"flex-col"}>
                      <div className={"flex justify-between font-medium mb-3"}>
                        <div>Principal</div>
                        <div className={"font-semibold"}>
                        ₹{totalInvestment.toLocaleString("en-In")}
                        </div>
                      </div>
                      <div className={"flex justify-between font-medium mb-3"}>
                        <div>Total Interest</div>
                        <div className={"font-semibold"}>
                        ₹{output.toLocaleString(
                            "en-In"
                          )}
                        </div>
                      </div>
                      <div className={"flex justify-between font-medium mb-3"}>
                        <div>Total Amount</div>
                        <div className={"font-semibold"}>
                        ₹{totalAmount.toLocaleString("en-In")}
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Side Pannel */}
          <div
            className={
              "[@media(max-width:1000px)]:w-[100%] lg:w-[23%] lg:max-h-[516px] xl:max-h-[403px] px-[20px] py-[22px] [@media(max-width:1000px)]:mt-[20px] lg:mt-0 border-2 border-white rounded-[30px] shadow-md shadow-[#505C6227] bg-white bg-opacity-40 backdrop-blur-[30px] overflow-y-scroll [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']"
            }
          >
            <div className={"font-bold "}>How to use this calculator?</div>
            <CollapsibleBox
              heading={'Simple Interest'}
              content={'Simple interest is a method of calculating the interest on a loan or deposit. It is calculated as the product of the principal amount, interest rate, and time period'}
            />
            <CollapsibleBox
              heading={'Uses of Simple Interest'}
              content={'Simple interest is more advantageous for borrowers than compound interest, as it keeps overall interest payments lower'}
            />
            <CollapsibleBox
              heading={'Calculating simple interest'}
              content={'To calculate simple interest, multiply the principal amount by the interest rate and the time'}
              last={true}
            />
            
          </div>
        </div>

        {/* FAQ box */}
        <div
          className={
            "px-[25px] py-[10px] mt-[40px] border-2 border-white rounded-[30px] shadow-md shadow-[#505C6227] bg-white bg-opacity-40 backdrop-blur-[30px]"
          }
        >
          <CollapsibleBox
            heading={'What is simpleInterest?'}
            content={'Simple interest is a method of calculating the interest on a loan or deposit.It is calculated as the product of the principal amount,interest rate,and time period.'}
          />

          <CollapsibleBox
            heading={'When can this calculator be used?'}
            content={'Calculating simple interest can be beneficial in a variety of scenarios, such as when borrowing money, investing money, saving money, or carrying a balance on a credit card. By calculating the amount of interest involved, you can make more informed financial decisions and better understand the actual cost or benefit of different financial transactions. FundsIndia SI Calculator can be used in all these situations for an accurate calculation.'}
          />

          <CollapsibleBox
            heading={'How can you use the Simple Interest Calculator?'}
            content={'FundsIndia Simple Interest Calculator is very easy to use. Just plugin the principal amount, interest rate, and tenure. The calculator will give you accurate results regardless of currency.'}
          />

          <CollapsibleBox
            heading={'How does the Simple Interest calculator work?'}
            content={
            <>
            It uses the following logic<br></br><br></br> <b>I = P * R * T <br></br>where: <br></br>I = Interest<br></br> P = Principal (the initial amount) <br></br>R = Interest Rate (as a decimal) <br></br>T = Time Period (in years)</b></>}
          />

          <CollapsibleBox
            heading={'Why should I use FundsIndia Simple Interest Calculator?'}
            content={'FundsIndia SI Calculator is an intuitive and easy to use application that can save the time of manually calculating simple interest. It can visualise the interest with principal amount in an easily understandable manner.'}
          />
        </div>

        {/* Related Calculators */}
        <div className={"my-[30px] "}>
          <div className={"font-bold mb-[14px] text-[#464143]"}>
            Related Calculators
          </div>

          <div className={"no-scrollbar overflow-x-auto flex -mx-20 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']"}>
            <RelatedCalculator name={"Simple Interest"} path={"#"} first={true} />

            <RelatedCalculator name={"SWP Calculator"} path={"#"} />

            <RelatedCalculator name={"CAGR calculator"} path={"#"} />

            <RelatedCalculator name={"FD Calculator"} path={"#"} />

            <RelatedCalculator name={"SD Calculator"} path={"#"} />

            <RelatedCalculator name={"Compound Interest Calculator"} path={"#"} />

            <RelatedCalculator name={"Income Tax Calculator"} path={"#"} />

            <RelatedCalculator name={"PPF Calculator"} path={"#"} />

            <RelatedCalculator name={"NPS Calculator"} path={"#"} />

            <RelatedCalculator name={"EPF Calculator"} path={"#"} />
          </div>
        </div>
      </main>
    </>
  );
}
