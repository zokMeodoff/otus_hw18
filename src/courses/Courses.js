import React, { Component } from 'react'
import CourseCard from './CourseCard'


export const courses = [
    {
        name: 'Разработчик JavaScript',
        description: 'Полный курс по JavaScript для web-разработчиков, которые хотят вывести свои навыки программирования на новый профессиональный уровень',
        startDate: '27 июня',
        duration: '5',
    },
    {
        name: 'Разработчик C++',
        description: 'Особенности разработки программного обеспечения на C++',
        startDate: '27 июня',
        duration: '5',
    },
    {
        name: 'Web-разработчик на Python',
        description: 'Курс предназначен для подготовки специалиста, который сможет не только решать рядовые задачи бекенд-разработки, но и сделать с нуля современную фронтенд часть',
        startDate: '29 июля',
        duration: '5',
    }
];

class Courses extends Component {
    render() {
		return (
			<div className="container">
				<h2 className="h">Популярные курсы</h2>
				<div className="row row_justify_space-between">
					{
						courses.map((course) =>
							<CourseCard
								course={course}
								key={course.name}
							/>
						)
					}
				</div>
			</div>
        )
    }
}

export default Courses;