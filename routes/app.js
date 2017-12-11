app.use('/users', users);
// The checkout route
var checkout = require('./routes/checkout');
app.use('/checkout', checkout);
