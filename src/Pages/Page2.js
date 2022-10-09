import React from "react";
import "../assets/page1.css";
import { Card } from "react-bootstrap";
const Page2 = () => {
   return (
      <React.Fragment>
         <div className="page2-main">
            <div className="container fluid">
               <div className="row">
                  <div className="col-6">
                     <Card className="card-small">
                        <Card.Title className="card-title text-center white-text mb-0 p-3 border-none">
                           <h2>
                              <span>FRESH SALADS</span>
                           </h2>
                        </Card.Title>
                        <Card.Body className="card-body">
                           <div className="row">
                              <div className="col-6"></div>
                              <div className="col-3 text-danger">Small</div>
                              <div className="col-3 text-danger">Large</div>
                           </div>
                           <div className="row">
                              <Card.Text className="mb-0">
                                 <h5 className="text-success mb-0">
                                    <b>Garden</b>{" "}
                                    <span className="text-black">
                                       ..................................................6.99
                                    </span>
                                    <span className="text-black">
                                       ........................8.99
                                    </span>
                                 </h5>
                                 <p>
                                    Mixed Greens, Tomatoes, Green Peppers,
                                    Onions, Black Olives & Mild Peppers
                                 </p>
                              </Card.Text>
                           </div>

                           <div className="row">
                              <Card.Text className="mb-0">
                                 <h5 className="text-success mb-0">
                                    <b>Antipasto</b>{" "}
                                    <span className="text-black">
                                       .............................................8.49
                                    </span>
                                    <span className="text-black">
                                       .......................11.99
                                    </span>
                                 </h5>
                                 <p>
                                    Ham, Salami, Provolone Cheese, Mixed
                                    Greens,Tomatoes, Green Peppers, Onions,
                                    Pepperoncini, Black Olives
                                 </p>
                              </Card.Text>
                           </div>

                           <div className="row">
                              <Card.Text className="mb-0">
                                 <h5 className="text-success mb-0">
                                    <b>Greek</b>{" "}
                                    <span className="text-black">
                                       ....................................................8.49
                                    </span>
                                    <span className="text-black">
                                       .......................11.99
                                    </span>
                                 </h5>
                                 <p>
                                    Feta Cheese, Lettuce, Tomatoes, Beats, Green
                                    Peppers, Onions, Pepperoncini, Black Olives
                                 </p>
                              </Card.Text>
                           </div>

                           <div className="row">
                              <Card.Text className="mb-0">
                                 <h5 className="text-success mb-0">
                                    <b>Grilled Chicken</b>
                                    <span className="text-black">
                                       ....................................8.49
                                    </span>
                                    <span className="text-black">
                                       ......................11.99
                                    </span>
                                 </h5>
                                 <p>
                                    Grilled Chicken, Bacon, Lettuce, Tomatoes,
                                    Pineapples, Mozzarella Cheese
                                 </p>
                              </Card.Text>
                           </div>
                        </Card.Body>
                     </Card>
                  </div>
                  <div className="col-4">
                     <Card className="card-small">
                        <Card.Title className="card-title text-center white-text mb-0 p-3 border-none">
                           <h2>
                              <span>WINGS</span>
                           </h2>
                        </Card.Title>
                        <Card.Body className="card-body">
                           <div className="row">
                              <div className="col-6"></div>
                              <div className="col-3 "></div>
                              <div className="col-3 text-danger">1 LB</div>
                           </div>
                           <div className="row">
                              <Card.Text className="mb-0">
                                 <h5 className="text-success mb-0">
                                    <b>Boneless</b>{" "}
                                    <span className="text-black">
                                       .........................................12.99
                                    </span>
                                 </h5>
                                 <p>
                                    Your Choice of BBQ, Buffalo, Original Sweek
                                    Asian Ginger, Served with 1 side of ranch or
                                    blue cheese, additional cups $1
                                 </p>
                              </Card.Text>
                           </div>
                        </Card.Body>
                     </Card>
                     <Card className="card-small mt-3">
                        <Card.Title className="card-title text-center white-text mb-0 p-3 border-none">
                           <h2>
                              <span>Calzones</span>
                           </h2>
                        </Card.Title>
                        <Card.Body className="card-body">
                           <div className="row">
                              <div className="col-6"></div>
                              <div className="col-3 "></div>
                              <div className="col-3 text-danger">1 LB</div>
                           </div>
                           <div className="row">
                              <Card.Text className="mb-0">
                                 <h5 className="text-success mb-0">
                                    <b>Cheese and Sauce</b>{" "}
                                    <span className="text-black">
                                       ..........................6.99
                                    </span>
                                 </h5>
                                 <p>Additional Toppings 75¢</p>
                              </Card.Text>
                           </div>
                        </Card.Body>
                     </Card>
                  </div>
               </div>
               <div className="row mt-5">
                  <div className="col-6">
                     <Card className="card-small mt-5">
                        <Card.Title className="card-title text-center white-text mb-0 p-3 border-none">
                           <h2>
                              <span>Oliver's Bread & Stix</span>
                           </h2>
                        </Card.Title>
                        <Card.Body className="card-body">
                           <div className="row">
                              <Card.Text className="mb-0">
                                 <h5 className="text-success mb-0">
                                    <b>Bread Stix</b>{" "}
                                    <span className="text-black">
                                       ...............................................................6.99
                                    </span>
                                 </h5>
                                 <p>
                                    Fresh Dough Covered with Garlic Butter &
                                    Romano Cheese. Includes 1 ranch or pizza
                                    sauce. Add extra sauce $1 each
                                 </p>
                              </Card.Text>
                           </div>

                           <div className="row">
                              <Card.Text className="mb-0">
                                 <h5 className="text-success mb-0">
                                    <b>Cheese Bread</b>{" "}
                                    <span className="text-black">
                                       ..................
                                       <span className="text-danger small-font">
                                          sm. 16pc{" "}
                                       </span>
                                       6.99
                                    </span>
                                    <span className="text-black">
                                       ...........
                                       <span className="text-danger small-font">
                                          lg. 16pc{" "}
                                       </span>
                                       9.99
                                    </span>
                                 </h5>
                                 <p>
                                    Fresh Dough covered with Mozzarella, Garlic
                                    Butter Sauce, & Romano Cheese. Includes one
                                    ranch or pizza sauce. Add an extra sauce 1$
                                    each. Add bacon, pepperoni, or jalapeno 75¢
                                    Sm. & $1.50 Lg.
                                 </p>
                              </Card.Text>
                           </div>

                           <div className="row">
                              <Card.Text className="mb-0">
                                 <h5 className="text-success mb-0">
                                    <b>Tripple Cheese Bread</b>{" "}
                                    <span className="text-black">
                                       ...
                                       <span className="text-danger small-font">
                                          sm. 16pc{" "}
                                       </span>
                                       6.99
                                    </span>
                                    <span className="text-black">
                                       ...........
                                       <span className="text-danger small-font">
                                          lg. 16pc{" "}
                                       </span>
                                       9.99
                                    </span>
                                 </h5>
                                 <p>
                                    Fresh Dough covered with Mozzarella, Garlic
                                    Butter Sauce, Cheddar & Romano Cheese.
                                    Includes one ranch or pizza sauce. Add an
                                    extra sauce 1$ each. Add bacon, pepperoni,
                                    or jalapeno 75¢ Sm. & $1.50 Lg.
                                 </p>
                              </Card.Text>
                           </div>

                           <div className="row">
                              <Card.Text className="mb-0">
                                 <h5 className="text-success mb-0">
                                    <b>Bread Bites</b>{" "}
                                    <span className="text-black">
                                       ......................................................
                                       <span className="text-danger small-font">
                                          40pc{" "}
                                       </span>
                                       6.99
                                    </span>
                                 </h5>
                                 <p>
                                    Chunks of Pizza Dough covered in Garlic
                                    Butter Sauce & Romano Cheese. Includes one
                                    ranch or pizza sauce. Add an extra sauce 1$
                                    each.
                                 </p>
                              </Card.Text>
                           </div>

                           <div className="row">
                              <Card.Text className="mb-0">
                                 <h5 className="text-success mb-0">
                                    <b>Cinnamon Stix</b>{" "}
                                    <span className="text-black">
                                       ................................................
                                       <span className="text-danger small-font">
                                          10pc{" "}
                                       </span>
                                       4.99
                                    </span>
                                 </h5>
                                 <p>
                                    Fresh Dough covered in Cinnamon Sugar Butter
                                    & side of Icing
                                 </p>
                              </Card.Text>
                           </div>
                        </Card.Body>
                     </Card>
                  </div>
                  <div className="col-4">
                     <Card className="card-small">
                        <Card.Title className="card-title text-center white-text mb-0 p-3 border-none">
                           <h2>
                              <span>Premium Subs</span>
                           </h2>
                        </Card.Title>
                        <Card.Body className="card-body">
                           <div className="row premium-subs-options">
                              <Card.Text className="mb-0">
                                 <h5 className="text-success mb-0">
                                    <b>Italian</b>{" "}
                                    <span className="text-black">
                                       ..........................................7.49
                                    </span>
                                 </h5>
                                 <p>
                                    Ham, Salami, Cheese, Lettuce, Tomatoes,
                                    Onions, Mild Pepper Rings, & Dressing
                                 </p>
                              </Card.Text>
                           </div>
                           <div className="row premium-subs-options">
                              <Card.Text className="mb-0">
                                 <h5 className="text-success mb-0">
                                    <b>Turkey</b>{" "}
                                    <span className="text-black">
                                       ..........................................7.49
                                    </span>
                                 </h5>
                                 <p>
                                    Turkey, Cheese, Lettuce, Tomatoes, &
                                    Dressing
                                 </p>
                              </Card.Text>
                           </div>
                           <div className="row premium-subs-options">
                              <Card.Text className="mb-0">
                                 <h5 className="text-success mb-0">
                                    <b>Club</b>{" "}
                                    <span className="text-black">
                                       ..............................................7.49
                                    </span>
                                 </h5>
                                 <p>
                                    Turkey, Ham, Bacon, Cheese, Lettuce,
                                    Tomatoes, & Dressing
                                 </p>
                              </Card.Text>
                           </div>
                           <div className="row premium-subs-options">
                              <Card.Text className="mb-0">
                                 <h5 className="text-success mb-0">
                                    <b>Pizza Sub</b>{" "}
                                    <span className="text-black">
                                       ....................................7.49
                                    </span>
                                 </h5>
                                 <p>
                                    Pepperoni, Ham, Cheese,Onions, & Pizza Sauce
                                 </p>
                              </Card.Text>
                           </div>
                           <div className="row premium-subs-options">
                              <Card.Text className="mb-0">
                                 <h5 className="text-success mb-0">
                                    <b>Grilled Chicken</b>{" "}
                                    <span className="text-black">
                                       .........................8.99
                                    </span>
                                 </h5>
                                 <p>
                                    Chicken, Cheese, Lettuce, Tomatoes, &
                                    Dressing
                                 </p>
                              </Card.Text>
                           </div>
                           <div className="row premium-subs-options">
                              <Card.Text className="mb-0">
                                 <h5 className="text-success mb-0">
                                    <b>Philly Steak & Cheese</b>{" "}
                                    <span className="text-black">
                                       ............8.99
                                    </span>
                                 </h5>
                                 <p>
                                    Steak, Mushrooms, Cheese, Onion, Green
                                    Pepper, & Dressing
                                 </p>
                              </Card.Text>
                           </div>
                           <div className="row premium-subs-options">
                              <Card.Text className="mb-0">
                                 <p>
                                    <span className="text-danger ">
                                       Ex. Cheese on Subs -{" "}
                                       <span className="text-black">1.00</span>{" "}
                                    </span>
                                    <span className="text-danger ">
                                       Ex. Meat on Subs -{" "}
                                       <span className="text-black">2.50</span>{" "}
                                    </span>
                                    <span className="text-danger ">
                                       Choice of Salad and Sub dressing:{" "}
                                    </span>
                                    Olive & Vinegar, Italian, Ranch, Greek, Blue
                                    Cheese, BBQ, Mayo, Hot Sauce
                                 </p>
                              </Card.Text>
                           </div>
                        </Card.Body>
                     </Card>
                  </div>
               </div>
            </div>
         </div>
      </React.Fragment>
   );
};
export default Page2;
