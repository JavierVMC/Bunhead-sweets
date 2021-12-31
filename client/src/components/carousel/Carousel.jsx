export default function Carousel() {
  return (
    <div id="myCarousel" className="carousel slide" data-ride="carousel">
      <ol className="carousel-indicators">
        <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
        <li data-target="#myCarousel" data-slide-to="1"></li>
        <li data-target="#myCarousel" data-slide-to="2"></li>
        <li data-target="#myCarousel" data-slide-to="3"></li>
        <li data-target="#myCarousel" data-slide-to="4"></li>
      </ol>

      <div className="carousel-inner">
        <div className="item active">
          <img src="./img/products/cupcake.jpg" alt="cupcakes" />
        </div>

        <div className="item">
          <img src="./img/products/cupcake2.jpg" alt="cupcakes2" />
        </div>

        <div className="item">
          <img src="./img/products/cake.jpg" alt="cake" />
        </div>

        <div className="item">
          <img src="./img/products/cake2.jpg" alt="cake2" />
        </div>

        <div className="item">
          <img src="./img/products/cookies.jpg" alt="cookies" />
        </div>
      </div>

      <a className="left carousel-control" href="#myCarousel" data-slide="prev">
        <span className="glyphicon glyphicon-chevron-left"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="right carousel-control"
        href="#myCarousel"
        data-slide="next"
      >
        <span className="glyphicon glyphicon-chevron-right"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
}
