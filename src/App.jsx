import { useState } from 'react'
import './App.css'
import { assests } from './assests/assests.js'
function App() {
  const [count, setCount] = useState(0)

  return (
    <body>

    <nav>
        <div class="left">
            <div class="logo">
                <img src={assests.logo2}/>
            </div>
        </div>

        <div class="buttons">
            <a href="#"><i class='bx bx-support'></i></a>
            <a href="#"><i class='bx bx-basket'></i></a>
            <a href="#"><i class='bx bx-user'></i></a>
        </div>

    </nav>

    <header>
        <div class="info">
            <div class="logo">
                <img src={assests.logo}/>
            </div>
            <h1>DIKSUCHI</h1>
            <p>Your Campus companion!</p>
        </div>
        <div class="buttons">
            <button class="see-all"><a class="see-all" href="https://vashista.netlify.app/">AI BoT</a></button>
            <button>Connect With Others</button>
        </div>
        <div class="search">
            <input type="text" placeholder="Search what you want..."/>
            <button><i class='bx bx-search'></i></button>
        </div>
    </header>

    <div class="content">
        <div class="separator">
            <h2>Courses</h2>
            <a href="#">See all <i class='bx bx-chevron-right'></i></a>
        </div>

        <div class="courses">
            <div class="item">
                <div class="top">
                    <img src={assests.course_1}/>
                    <div class="info">
                        <a href="#">MPMC</a>
                        <p>Lecturer : ----</p>
                        <p>Classes per Week : 3 Theory/1 Practical</p>
                        <p>Sem-6</p>
                    </div>
                </div>
                <div class="bottom">
                    <div class="price">
                        <h5>Marks Scored : 49</h5>
                        <p>Total Marks : 70</p>
                    </div>
                    <h5 class="tag"><span>1 assignment</span> due</h5>
                </div>
            </div>
            <div class="item">
                <div class="top">
                    <img src={assests.course_2}/>
                    <div class="info">
                    <a href="#">VLSI</a>
                        <p>Lecturer : ----</p>
                        <p>Classes per Week : 3 Theory/1 Practical</p>
                        <p>Sem-6</p>
                    </div>
                </div>
                <div class="bottom">
                    <div class="price">
                        <h5>Marks Scored : 49</h5>
                        <p>Total Marks : 70</p>
                    </div>
                    <div class="discount">
                    <h5 class="tag"><span>All</span> done</h5>
                    </div>
                </div>
            </div>
            <div class="item">
                <div class="top">
                    <img src={assests.course_3}/>
                    <div class="info">
                    <a href="#">Communication Networks</a>
                        <p>Lecturer : ----</p>
                        <p>Classes per Week : 3 Theory/1 Practical</p>
                        <p>Sem-6</p>
                    </div>
                </div>
                <div class="bottom">
                    <div class="price">
                        <h5>Marks Scored : 49</h5>
                        <p>Total Marks : 70</p>
                    </div>
                    <h5 class="tag"><span>1 assignment</span> due</h5>
                </div>
            </div>
            <div class="item">
                <div class="top">
                    <img src={assests.course_4}/>
                    <div class="info">
                    <a href="#">Antenna Analysis</a>
                        <p>Lecturer : ----</p>
                        <p>Classes per Week : 3 Theory/1 Practical</p>
                        <p>Sem-6</p>
                    </div>
                </div>
                <div class="bottom">
                    <div class="price">
                        <h5>Marks Scored : 49</h5>
                        <p>Total Marks : 70</p>
                    </div>
                    <div class="discount">
                    <h5 class="tag"><span>All</span> done</h5>
                    </div>
                </div>
            </div>
            <div class="item">
                <div class="top">
                    <img src={assests.course_5}/>
                    <div class="info">
                    <a href="#">Design Thinking</a>
                        <p>Lecturer : ----</p>
                        <p>Classes per Week : 3 Theory/1 Practical</p>
                        <p>Sem-6</p>
                    </div>
                </div>
                <div class="bottom">
                    <div class="price">
                        <h5>Marks Scored : 49</h5>
                        <p>Total Marks : 70</p>
                    </div>
                    <h5 class="tag"><span>1 assignment</span> due</h5>
                </div>
            </div>
            <div class="item">
                <div class="top">
                    <img src={assests.course_6}/>
                    <div class="info">
                    <a href="#">Machine learning</a>
                        <p>Lecturer : ----</p>
                        <p>Classes per Week : 3 Theory/1 Practical</p>
                        <p>Sem-6</p>
                    </div>
                </div>
                <div class="bottom">
                    <div class="price">
                        <h5>Marks Scored : 49</h5>
                        <p>Total Marks : 70</p>
                    </div>
                    <div class="discount">
                    <h5 class="tag"><span>All</span> done</h5>
                    </div>
                </div>
            </div>
        </div>

        <div class="separator">
            <h2>Community</h2>
        </div>
        <div class="comments">
            <p>Connect with Students across the university, Answer their questions. Buy/Sell academic items. If you got a question post it!</p>
            <div class="right">
                <div class="item">
                    <img src={assests.profile_1}/>
                    <p>Hi there, Anyone want to be part of a research paper?</p>
                </div>
                <div class="item">
                    <img src={assests.profile_3}/>
                    <p>Want to find PG nearby, Help is appreciated</p>
                </div>
                <div class="item">
                    <img src={assests.profile_2}/>
                    <p>If anyone want Data Structures with Python, DM!</p>
                </div>
                <div class="item">
                    <img src={assests.profile_2}/>
                    <p>Computer Science Books available</p>
                </div>
                <div class="item">
                    <img src={assests.profile_1}/>
                    <p>Need a team for an upcoming cultural team.</p>
                </div>
                <div class="item">
                    <img src={assests.profile_3}/>
                    <p>Data science books available!</p>
                </div>

            </div>
        </div>

        <div class="separator">
            <h2>To-Do</h2>
            <a href="#">add more<i class='bx bx-chevron-right'></i></a>
        </div>

        <div class="podcasts">
            <div class="item">
                <div class="top">
                <i class='bx bx-task-x' ></i>
                    <div class="info">
                        <a href="#">Learn Coding</a>
                        <p>10 Aug 2024</p>
                    </div>
                </div>
                <div class="bottom">
                    <div class="duration">
                    <i class='bx bx-task'></i>
                    </div>
                    <h5 class="imp"> Important</h5>
                </div>
            </div>
            <div class="item">
                <div class="top">
                <i class='bx bx-task-x' ></i>
                      <div class="info">
                        <a href="#">Complete MPMC assgn</a>
                        <p>10 Aug 2024</p>
                    </div>
                </div>
                <div class="bottom">
                    <div class="duration">
                    <i class='bx bx-task'></i>
                    </div>
                    <h5 class="imp"> Due Today</h5>
                </div>
            </div>
            <div class="item">
                <div class="top">
                <i class='bx bx-task-x' ></i>
                    <div class="info">
                        <a href="#">Start React Course</a>
                        <p>10 Aug 2024</p>
                    </div>
                </div>
                <div class="bottom">
                    <div class="duration">
                    <i class='bx bx-task'></i>
                    </div>
                    <h5 class="usual"> This Weekend</h5>
                </div>
            </div>
        </div>

        <div class="separator">
            <h2>Career Gudance</h2>
            <a href="#">See all <i class='bx bx-chevron-right'></i></a>
        </div>

        <div class="articles">
            <div class="item">
                <div class="top">
                    <img src={assests.art_1}/>
                    <h5>Verbal Skills</h5>
                </div>
                <div class="bottom">
                    <a href="#">Access<i class='bx bx-chevron-right'></i></a>
                </div>
            </div>
            <div class="item">
                <div class="top">
                    <img src={assests.art_2}/>
                    <h5>Aptitude</h5>
                </div>
                <div class="bottom">
                    <a href="#">Access<i class='bx bx-chevron-right'></i></a>
                </div>
            </div>
            <div class="item">
                <div class="top">
                    <img src={assests.art_3}/>
                    <h5>DS questions</h5>
                </div>
                <div class="bottom">
                    <a href="#">Access <i class='bx bx-chevron-right'></i></a>
                </div>
            </div>
            <div class="item">
                <div class="top">
                    <img src={assests.art_4}/>
                    <h5>Interview Prep</h5>
                </div>
                <div class="bottom">
                    <a href="#">Access <i class='bx bx-chevron-right'></i></a>
                </div>
            </div>
        </div>

    </div>
</body>
  )
}

export default App
