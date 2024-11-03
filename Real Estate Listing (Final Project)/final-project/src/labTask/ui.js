import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

function App() {
  return (
    <div>
      <header className="header d-flex justify-content-between">
        <div className="logo">Your Logo</div>
        <div className="cart d-flex flex-column">
          <a id="account">My Account</a>
          <a id="viewCart">View Cart</a>
        </div>
      </header>
      <div id="main" className="d-flex">
        <div className="navbar-custom d-flex flex-column">
          <button className="btn btn-secondary">Home</button>
          <button className="btn btn-secondary">QNO1</button>
          <button className="btn btn-secondary">QNO2</button>
          <button className="btn btn-secondary"></button>
          <button className="btn btn-secondary">Contact Us</button>
          <button className="btn btn-secondary"></button>
          <button className="btn btn-secondary">My Account</button>
          <div className="info">
            <a>Create Account</a>
            <a>How to Buy</a>
            <a>FAQ'S</a>
            <a>Search</a>
          </div>
        </div>
        <div className="body ml-3">
          <div className="firstpara">
            <div id="image1" className="mr-3">
              <img
                src="https://images.pexels.com/photos/3643925/pexels-photo-3643925.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                className="img-fluid"
                style={{ height: '100px', width: '100px' }}
                alt="Welcome"
              />
            </div>
            <div id="text1">
              <h1 id="wel">Welcome</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum
                distinctio illum quod voluptas nulla rerum fugit, veniam aut
                perferendis pariatur neque vel quisquam repellat dolorum aliquid
                placeat vitae porro dolore? Ipsum reiciendis architecto
                asperiores, deleniti cupiditate cum harum optio non vero.
                Doloremque pariatur delectus labore blanditiis in quia
                quisquam, voluptates deleniti amet iure deserunt nam a enim cum
                voluptatum illum? Quo, nulla libero aperiam alias minus eveniet
                vero labore repudiandae tempore iure nam quibusdam nihil modi,
                sed dicta officia iste delectus, eligendi ipsa. Ad laboriosam
                iusto aspernatur quod totam tenetur? Qui sunt odio laborum
                magnam dolores quis vel deleniti optio labore illum repellat,
                voluptate eaque commodi rerum amet, quas, esse tempore tenetur
                sequi corrupti molestiae earum sint aperiam error! Facilis?
                Accusamus harum aut hic obcaecati inventore recusandae,
                doloribus ullam tempore, velit iste et id alias quidem nesciunt
                minima aliquam quod ea! Ratione minima nisi, debitis nostrum vel
                iste eius repellendus. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Libero, ad! Saepe laborum fuga et,
                voluptatibus cumque natus expedita voluptatum quia, perspiciatis
                atque cupiditate. Possimus repellat dolorum sint, repellendus
                labore maiores.
              </p>
            </div>
          </div>
          <div className="data d-flex">
            <div className="data1">
              <img
                src="https://images.pexels.com/photos/1547813/pexels-photo-1547813.jpeg?auto=compress&cs=tinysrgb&w=600"
                className="img-fluid"
                style={{ height: '200px', width: '400px' }}
                alt="Content"
              />
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Necessitatibus voluptatum sequi culpa blanditiis obcaecati
                labore quibusdam velit ducimus eum, consequuntur odit porro
                fugiat, omnis optio enim dignissimos veniam libero suscipit!
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque
                culpa deleniti, vel sunt eaque minus libero iste debitis
                pariatur quidem nisi cumque rerum placeat tempora laudantium,
                ipsum dicta quos nobis. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Magni sunt quidem mollitia enim nemo, nam
                officia porro deleniti illum dolorum minima nostrum omnis
                laborum deserunt recusandae ullam aliquam animi doloribus?
              </p>
            </div>
            <div className="data2 d-flex flex-column">
              <div id="image">
                <img
                  src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=600"
                  className="img-fluid"
                  style={{ height: '200px', width: '300px' }}
                  alt="Technology"
                />
              </div>
              <div id="text">
                <h1 id="tech">Technology</h1>
                <p>
                  ipsum dolor sit amet consectetur adipisicing elit. Atque, et
                  minus in cumque quae dolores saepe nemo esse impedit natus,
                  modi possimus? Hic, adipisci dolor inventore dolore dicta amet
                  officiis. Mollitia officia cupiditate neque voluptatem
                  laboriosam beatae adipisci, molestiae illo, deleniti
                  repellendus ea possimus et libero praesentium quo nostrum
                  soluta temporibus natus doloremque. Numquam
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
