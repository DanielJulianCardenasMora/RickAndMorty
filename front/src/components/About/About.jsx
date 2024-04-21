import style from './About.module.css'









function About() {
  return (
    <div className={style.box}>
      <div className={style.text}>
        <h1>Hi! Is good to have you here!</h1>
        <br />
        <br />
        <h1>This RESTful API is able to handle request and responses and keeps all the data save, it's all coded in JavaScript.</h1>
        <br />
        <br />
        <br />
        <br />
        <h1>Since I am using Exprees, Sequelize and PostgreSQL, the app can process the information with a lot of integrity, and the favorites component will always remain stored for each user that is registered.</h1>
        <br />
        <br />
        <h1>I also use front-end tools such as and Rect and Redux, they make the app very light weight so it works really fast</h1>
      </div>
      <p style={{ width: '100%', display: 'inline-block', fontSize: '.3vw' }} >
        
       
      </p>
    </div>
  )
}

export default About