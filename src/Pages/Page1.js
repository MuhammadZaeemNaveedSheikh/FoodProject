import React from "react";
import { Card } from "react-bootstrap";
import "../assets/page1.css";
import menuPizza from "../assets/menu-pizza.webp";
import cardPizza from "../assets/card-pizza.png";
const Page1 = () => {
   return (
      <React.Fragment>
         <div className="page1-main">
            <div className="container fluid">
               <div className="row">
                  <div className="col-8">
                     {" "}
                     <Card className="card-small">
                        <Card.Title className="card-title text-center white-text mb-0 p-3 border-none">
                           <h2>
                              <span>SPECIALITY PIZZAS</span>
                           </h2>
                        </Card.Title>
                        <Card.Body className="card-body">
                           <Card.Text className="text-center">
                              <b>
                                 Small $11.99 * Medium $14.99 * Large $18.49 *
                                 4+4 $20.99 * XL $25.99
                              </b>
                           </Card.Text>
                           <div className="row">
                              <div className="col-6">
                                 <Card.Text className="mb-0">
                                    <h5 className="text-success mb-0">
                                       <b>Grilled Chicken</b>
                                    </h5>
                                 </Card.Text>
                                 <Card.Text>
                                    <p className="white-text">
                                       Mozirella and Feta Cheese, Grilled
                                       Chicken, Tomatoes, Mild Peppers, Onions,
                                       & Ranch
                                    </p>
                                 </Card.Text>
                              </div>
                              <div className="col-6">
                                 <Card.Text className="mb-0">
                                    <h5 className="text-success mb-0">
                                       <b>Deluxe</b>
                                    </h5>
                                 </Card.Text>
                                 <Card.Text>
                                    <p className="white-text">
                                       Mozzarella Cheese, Pepperoni, Ham, Bacon,
                                       Italian Sausage & Ground Beef
                                    </p>
                                 </Card.Text>
                              </div>
                           </div>

                           <div className="row">
                              <div className="col-6">
                                 <Card.Text className="mb-0">
                                    <h5 className="text-success mb-0">
                                       <b>The Sizzler</b>
                                    </h5>
                                 </Card.Text>
                                 <Card.Text>
                                    <p className="white-text">
                                       Mozirella and Cheddars, & Double
                                       Pepperoni
                                    </p>
                                 </Card.Text>
                              </div>
                              <div className="col-6">
                                 <Card.Text className="mb-0">
                                    <h5 className="text-success mb-0">
                                       <b>Philly Steak</b>
                                    </h5>
                                 </Card.Text>
                                 <Card.Text>
                                    <p className="white-text">
                                       Mozzarella Cheese, Steak, Mushrooms,
                                       Green Peppers, Onions & Garlic Butter
                                       Sauce
                                    </p>
                                 </Card.Text>
                              </div>
                           </div>

                           <div className="row">
                              <div className="col-6">
                                 <Card.Text className="mb-0">
                                    <h5 className="text-success mb-0">
                                       <b>Pizzadilla</b>
                                       <span className="text-black font-size-12">
                                          ... Small $17.99 Large $19.99
                                       </span>
                                    </h5>
                                 </Card.Text>
                                 <Card.Text>
                                    <p className="white-text mb-0">
                                       <span className="text-danger">
                                          Top layer:{" "}
                                       </span>
                                       Parmesan, Cheddar, & Mozzarella Cheeses,
                                       Brushed with Garlic Butter
                                    </p>
                                    <p className="white-text">
                                       <span className="text-danger">
                                          Bottom layer:{" "}
                                       </span>
                                       Loaded with your favourite topping,
                                       Sauce, & Mozzarella Cheese
                                    </p>
                                 </Card.Text>
                              </div>
                              <div className="col-6">
                                 <Card.Text className="mb-0">
                                    <h5 className="text-success mb-0">
                                       <b>B.L.T</b>
                                    </h5>
                                 </Card.Text>
                                 <Card.Text>
                                    <p className="white-text">
                                       Mozzarella Cheese, Bacon, Lettuce, Tomato
                                       & Mayo
                                    </p>
                                 </Card.Text>
                              </div>
                           </div>

                           <div className="row">
                              <div className="col-6">
                                 <div className="row">
                                    <div className="col-6">
                                       <Card.Text className="mb-0">
                                          <h5 className="text-success mb-0">
                                             <b>Supreme</b>
                                          </h5>
                                       </Card.Text>
                                       <Card.Text>
                                          <p className="white-text">
                                             Mozirella Cheese, Ham, Pepperoni,
                                             Mushrooms, Onions, Green Peppers
                                          </p>
                                       </Card.Text>
                                    </div>
                                    <div className="col-6">
                                       <img
                                          alt="pizza"
                                          src={menuPizza}
                                          width="120px"
                                       ></img>
                                    </div>
                                 </div>
                              </div>
                              <div className="col-6">
                                 <Card.Text className="mb-0">
                                    <h5 className="text-success mb-0">
                                       <b>Vegetarian</b>
                                    </h5>
                                 </Card.Text>
                                 <Card.Text>
                                    <p className="white-text">
                                       Mozzarella Cheese, Mushrooms, Green
                                       Peppers, Onions, Black Olives & Pepper
                                    </p>
                                 </Card.Text>
                              </div>
                           </div>

                           <div className="row">
                              <div className="col-6">
                                 <Card.Text className="mb-0">
                                    <h5 className="text-success mb-0">
                                       <b>BBQ Chicken</b>
                                    </h5>
                                 </Card.Text>
                                 <Card.Text>
                                    <p className="white-text">
                                       Mozirella and Cheddar Cheese, Grilled
                                       Chicken, Bacon, Onions & BBQ Sauce
                                    </p>
                                 </Card.Text>
                              </div>
                              <div className="col-6">
                                 <Card.Text className="mb-0">
                                    <h5 className="text-success mb-0">
                                       <b>Angry Chicken</b>
                                    </h5>
                                 </Card.Text>
                                 <Card.Text>
                                    <p className="white-text">
                                       Mozzarella Cheese, Jallapeno, Pineapple,
                                       Chicken, Sesame Seeds & Sweet Asian
                                       Ginger Sauce
                                    </p>
                                 </Card.Text>
                              </div>
                           </div>
                        </Card.Body>
                     </Card>
                  </div>
                  <div className="col-4">
                     <Card className="card-small">
                        <Card.Img variant="top" src={cardPizza} />
                        <Card.Body>
                           <div className="row">
                              <div className="col-6"></div>
                              <div className="col-3 card-small-cheese">
                                 Cheese
                              </div>
                              <div className="col-3 card-small-cheese">
                                 Topping
                              </div>
                           </div>
                           <div className="row">
                              <h5 className="card-small-texts text-success mb-0">
                                 <b>Small 10"</b>{" "}
                                 <span className="text-black">
                                    Round or Square{" "}
                                 </span>{" "}
                                 <span className="text-black">
                                    <b>..... $9.99</b>
                                 </span>
                                 <span className="text-black">
                                    <b>..... $1.00</b>
                                 </span>
                              </h5>
                           </div>
                           <div className="row">
                              <h5 className="card-small-texts text-success mb-0">
                                 <b>Medium 12"</b>{" "}
                                 <span className="text-black">Round Only </span>{" "}
                                 <span className="text-black">
                                    <b>...... $11.99</b>
                                 </span>
                                 <span className="text-black">
                                    <b>...... $1.25</b>
                                 </span>
                              </h5>
                           </div>
                           <div className="row">
                              <h5 className="card-small-texts text-success mb-0">
                                 <b>Large 14"</b>{" "}
                                 <span className="text-black">
                                    Round, Square
                                 </span>{" "}
                                 <span className="text-black">
                                    <b>...... $13.99</b>
                                 </span>
                                 <span className="text-black">
                                    <b>...... $1.75</b>
                                 </span>
                              </h5>
                           </div>
                           <div className="row">
                              <h5 className="card-small-texts text-success mb-0">
                                 <b>XL 16"</b>{" "}
                                 <span className="text-black">
                                    Square Only{" "}
                                 </span>{" "}
                                 <span className="text-black">
                                    <b>............... $16.99</b>
                                 </span>
                                 <span className="text-black">
                                    <b>..... $2.75</b>
                                 </span>
                              </h5>
                           </div>
                           <div className="row">
                              <h5 className="card-small-texts text-success mb-0">
                                 <b>4+4 Corners</b>{" "}
                                 <span className="text-black">
                                    <b>.......................... $13.99</b>
                                 </span>
                                 <span className="text-black">
                                    <b>..... $2.00</b>
                                 </span>
                              </h5>
                           </div>
                        </Card.Body>
                     </Card>
                  </div>
               </div>

               <div className="card-title text-center white-text mb-0 mt-5 p-3 border-none">
                  <h2>
                     <span>TRY OUR CREAM CHEESE PIZZA FAMILY</span>
                  </h2>
               </div>
               <div className="row">
                  <div className="col-4">
                     <Card className="card-bottom">
                        <Card.Img variant="top" src={cardPizza} />
                        <div>
                           <h2 className="bottom-card-img-text">Jallapeno</h2>
                        </div>
                        <Card.Body className="bottom-card-body">
                           <h2>Popper Pizza</h2>
                           <p>
                              Chicken, Bacon, Cream Cheese Base, Cheddar Cheese
                           </p>
                           <p>
                              Small $11.99 * Medium $12.99 * Large $18.99 * XL
                              $20.99 * 4+4 $25.99{" "}
                           </p>
                        </Card.Body>
                     </Card>
                  </div>
                  <div className="col-4">
                     <Card className="card-bottom">
                        <Card.Img variant="top" src={cardPizza} />
                        <div>
                           <h2 className="bottom-card-img-text">OLI 6</h2>
                        </div>
                        <Card.Body className="bottom-card-body">
                           <h2>Round or Square</h2>
                           <p>
                              <span className="text-danger">6 Toppings: </span>
                              Mozzarella and Cheedar Cheese Blend, Black Olives,
                              Onions,
                           </p>
                           <p>
                              Small $11.99 * Medium $12.99 * Large $18.99 * XL
                              $20.99 * 4+4 $25.99{" "}
                           </p>
                        </Card.Body>
                     </Card>
                  </div>
                  <div className="col-4">
                     <Card className="card-bottom">
                        <Card.Img variant="top" src={cardPizza} />
                        <div>
                           <h2 className="bottom-card-img-text">Steaks</h2>
                        </div>
                        <Card.Body className="bottom-card-body">
                           <h2>Steak and Cheese</h2>
                           <p>
                              Mozzarella Cheese, Onions, Steak, Mild Pepper,
                              Creem Cheese Base
                           </p>
                           <p>
                              Small $11.99 * Medium $12.99 * Large $18.99 * XL
                              $20.99 * 4+4 $25.99{" "}
                           </p>
                        </Card.Body>
                     </Card>
                  </div>
               </div>
            </div>
         </div>
      </React.Fragment>
   );
};
export default Page1;
