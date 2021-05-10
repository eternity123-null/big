import styles from '../components/Secondpage.module.css'
import Image from 'next/image'
export default function Secondpage(){
    return(
      <div className={styles.container}>
        <div className={styles.topbar}>
        <img src="/img/toutiao.jpeg" className={styles.logo} alt="今日头条" />
        <span className={styles.slogan}>今日头条</span>
        <img src="/img/open.png" className={styles.open} alt="打开" />
        </div>
        <div className={styles.wrapper}>
          <div className={styles.art_header}>
            <h1>习近平给《文史哲》编辑部全体编辑人员回信</h1>
            <div className={styles.author}>
              <img src="/img/xinhuawang.jpeg" alt="新华网" className={styles.media_pic} />
              <div className={styles.author_information}>
              <div className={styles.author_name}>新华网客户端</div>
              <div className={styles.details}>2小时前 · 新华网官方账号</div>
              </div>
              <div className={styles.subscribe}>关注</div>
            </div>
          </div>


      <div className={styles.art_container}>
        <div className={styles.words}>
        <p>新华社北京5月10日电 中共中央总书记、国家主席、中央军委主席习近平5月9日给《文史哲》编辑部全体编辑人员回信，对办好哲学社会科学期刊提出殷切期望。</p>
        <p>习近平在回信中说，《文史哲》创刊70年来，在党的领导下，几代编辑人员守正创新、薪火相传，在弘扬中华文明、繁荣学术研究等方面做了大量工作，在国内外赢得一定声誉，你们付出的努力值得肯定。</p>
        <p>习近平指出，增强做中国人的骨气和底气，让世界更好认识中国、了解中国，需要深入理解中华文明，从历史和现实、理论和实践相结合的角度深入阐释如何更好坚持中国道路、弘扬中国精神、凝聚中国力量。回答好这一重大课题，需要广大哲学社会科学工作者共同努力，在新的时代条件下推动中华优秀传统文化创造性转化、创新性发展。高品质的学术期刊就是要坚守初心、引领创新，展示高水平研究成果，支持优秀学术人才成长，促进中外学术交流。希望你们再接再厉，把刊物办得更好。</p>
        <p>山东大学《文史哲》杂志创办于1951年5月，是新中国成立后创刊的首家高校文科学报，也是我国目前刊龄最长的综合性人文社科学术期刊。近日，《文史哲》编辑部全体编辑人员给习近平总书记写信，汇报了70年来的办刊成绩，表达了担负起时代使命、发挥好期刊作用、为民族复兴贡献力量的决心。</p>
        <p><strong>回信全文：</strong></p>
        <p><strong>习近平给《文史哲》编辑部全体编辑人员的回信</strong></p>

        </div>
      </div>
        </div>

     
      </div>
    )
}