import React from 'react'
import './principalDesk.css'
export default function PrincipalDesk(){
    return(
        <>
            <header class="princpal-desk-heading">
        <h1>Principal Desk</h1>
        <h2>Mr. Rajesh Kumar</h2>
        <h3>Principal, Government Polytechnic, Dhanbad</h3>
    </header>
    <div class="principal-desk-box">
        <div class="principal-desk-card">
            <h3>About the Institution:</h3>
            <p>
                Government Polytechnic, Dhanbad is working efficiently to achieve proficiency in technical education and will blossom into an institution par excellence.
            </p>
            <p>
                The management has provided all infrastructure facilities required for quality education. The institute can boast of spacious classrooms, fully equipped laboratories, workshops, computer centre and drawing halls. Library transactions are computerized and it is stacked with the latest edition of books, magazines and journals.
            </p>
            <p>
                Along with sports, other co-curricular and extracurricular activities, short-term and value added courses will be imparted to the students during the vacations. Besides bestowing engineering knowledge, great emphasis is laid on character building and to inculcate discipline among the students.
            </p>
            <p>
                The Diploma level education is supposed to be foundation of students career and I am sure that our qualified, experienced and enthusiastic faculties will try their best to make this foundation the strongest possible. In this institute the efforts are concentrated on the overall development of an individual, equipping him with excellent communication skills and tuning soft skills. Co-curricular activities like sports and cultural events are also encouraged by providing facilities and equipments. We have also established a campus Placement Cell which organizes the active training and placement programs that provide assistance and guidance to the students.
            </p>
        </div>
        <div class="principal-desk-card principal-img">
            <img src="https://gpdhanbad.ac.in/wp-content/uploads/2025/04/principal_sir-e1744703088214.jpg"  alt="Principal's Image"/>
        </div>
    </div>
        </>
    )
}