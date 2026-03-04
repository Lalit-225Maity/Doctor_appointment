import React from 'react'
import './Question.css'
const Question = () => {
  const docSuggest = [
    {
      img: "https://assets.lybrate.com/f_auto,c_limit,w_128,q_auto/img/documents/doctor/dp/8e05077049ce1583826e8aa9314264e0/Psychology-AshaChakravarthy-Trivandrum-2f4391",
      ques: "Hi I will masturbate daily it is bad for my health..",
      ans: "Masturbation is not bad for health but is a natural tendancy if human beings. Please read through Bit. Ly/masturbation-facts-and-myths.  ",
      doctorName: "Ms. Asha Chakravarthy",
      Dept: "Sexologist"
    },
    {
      img:"https://assets.lybrate.com/f_auto,c_limit,w_128,q_auto/img/documents/doctor/dp/67f367c862f78b4848a8de1f9a9c9d3f/Endocrinology-RavindraChhajed-Pune-12efb5",
      ques:"I have been diagnosed as diabetic since 6 years, a..",
      ans:"Your fasting sugar is definitely good. Get post prandial glucose level and HBA1c. Alternative medicine at lower cost can be suggested. Get connected on my profile for prescription.  ",
      doctorName:"Dr. Ravindra Chhajed",
      Dept:"Diabetologist"
    },
    {
      img:"https://assets.lybrate.com/f_auto,c_limit,w_128,q_auto/img/documents/doctor/dp/0b12bd7f541bd6752c0b88a034372dc9/Pulmonology-AmitKumarPoddar-Kolkata-a2029e",
      ques:"I'm suffering for cough and throat irritation it h..",
      ans:"Warm saline gargle 2-3 times a day. Antihistaminic tablet may be needed suitable anti biotic for 7-10 days should addres.",
      doctorName:"Dr.Sajeev Kumar",
      Dept:"Cardiologist"
    }
  ]
  return (
    <div className='question-ans'>
      <div className="question-doctors">
        <h4>QUESTIONS & ANSWERS</h4>
        <h5>10 million+questions answered by doctors</h5>
        <div className="questions-doc-ans">
          {docSuggest.map((i) => (
            <div className="doctor-suggestions">
              <h5>{i.ques}</h5>
              <div className="doc-suggest">
                <div className="doc-name-exp-dept">
                  <img src={i.img} alt="" />
                  <span>
                    <p>{i.doctorName}</p>
                    <p>{i.Dept}</p>
                  </span>
                </div>
                <p>{i.ans}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Question
