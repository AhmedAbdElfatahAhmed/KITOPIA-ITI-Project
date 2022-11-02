import "./GamesList.scss";
import ludo from "../../../assets/images/games/ludo.png";
import snake from "../../../assets/images/games/snake.png";
import sonic from "../../../assets/images/games/sonic.png";
import memory from "../../../assets/images/games/memory.png";
const GamesList = () => {
  return (
    <section className="game-wrapper pt-5">
      <h1 className="heading mb-5">Games</h1>
      <div className="game-list">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
              <div className="game">
                <div className="game-icon mb-4">
                  <img src={ludo} alt="" />
                </div>
                <div className="game-name">Ludo</div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
              <div className="game">
                <div className="game-icon mb-4">
                  <img src={snake} alt="" />
                </div>
                <div className="game-name">Snake</div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
              <div className="game">
                <div className="game-icon mb-4">
                  <img src={sonic} alt="" />
                </div>
                <div className="game-name">Sonic</div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
              <div className="game">
                <div className="game-icon mb-4">
                  <img src={memory} alt="" />
                </div>
                <div className="game-name">Memory Game</div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
              <div className="game">
                <div className="game-icon mb-4">
                  <img src={memory} alt="" />
                </div>
                <div className="game-name">Memory Game</div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
              <div className="game">
                <div className="game-icon mb-4">
                  <img src={memory} alt="" />
                </div>
                <div className="game-name">Memory Game</div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
              <div className="game">
                <div className="game-icon mb-4">
                  <img src={memory} alt="" />
                </div>
                <div className="game-name">Memory Game</div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
              <div className="game">
                <div className="game-icon mb-4">
                  <img src={memory} alt="" />
                </div>
                <div className="game-name">Memory Game</div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
              <div className="game">
                <div className="game-icon mb-4">
                  <img src={memory} alt="" />
                </div>
                <div className="game-name">Memory Game</div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
              <div className="game">
                <div className="game-icon mb-4">
                  <img src={memory} alt="" />
                </div>
                <div className="game-name">Memory Game</div>
              </div>
            </div>
          </div>
        </div>
        <div class="bubbles">
          <span class="bubble"></span>
          <span class="bubble"></span>
          <span class="bubble"></span>
          <span class="bubble"></span>
          <span class="bubble"></span>
          <span class="bubble"></span>
          <span class="bubble"></span>
          <span class="bubble"></span>
          <span class="bubble"></span>
          <span class="bubble"></span>
          <span class="bubble"></span>
          <span class="bubble"></span>
          <span class="bubble"></span>
          <span class="bubble"></span>
          <span class="bubble"></span>
        </div>
      </div>
    </section>
  );
};

export default GamesList;
