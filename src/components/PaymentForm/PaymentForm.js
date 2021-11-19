import { Button, Card, Grid, Paper } from "@material-ui/core";
import React, { useState } from "react";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import "./PaymentForm.css";

const PaymentForm = () => {
   const [form, setForm] = useState({
      number: "",
      name: "",
      expiry: "",
      cvc: "",
   });
   const [focus, setFocus] = useState("");

   const handleChange = (e) => {
      const values = {
      ...form,
      [e.target.name]: e.target.value,
      };
      setForm(values);
   };

   return (
      <>
         <Grid container spacing={4} className="main">
            <Grid item md={5} xs={12}>
               <Paper>
                  <h1>Enter your payment details</h1>
                  <div className="card">
                  <Cards
                     id="PaymentForm"
                     cvc={form.cvc}
                     expiry={form.expiry}
                     focused={focus}
                     name={form.name}
                     number={form.number}
                  />
                  </div>
                  <form>
                  <input
                     className="number inp"
                     type="tel"
                     name="number"
                     placeholder="Card Number"
                     value={form.number}
                     onChange={handleChange}
                     onFocus={(e) => setFocus(e.target.name)}
                  />
                  <input
                     className="number inp"
                     type="text"
                     name="name"
                     placeholder="Card Holder's Name"
                     value={form.name}
                     onChange={handleChange}
                     onFocus={(e) => setFocus(e.target.name)}
                  />
                  <input
                     className="inp"
                     width="60px"
                     type="tel"
                     name="expiry"
                     placeholder="Valid Thru"
                     value={form.expiry}
                     onChange={handleChange}
                     onFocus={(e) => setFocus(e.target.name)}
                  />
                  <input
                     className="cvc inp"
                     type="tel"
                     name="cvc"
                     placeholder="CVC"
                     value={form.cvc}
                     onChange={handleChange}
                     onFocus={(e) => setFocus(e.target.name)}
                  />
                  </form>
                  <Button className="btn" variant="contained" color="primary">
                     PAY
                  </Button>
               </Paper>
            </Grid>
         </Grid>
      </>
   );
};

export default PaymentForm;