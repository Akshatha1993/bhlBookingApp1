import { Component, OnInit } from '@angular/core';
// import <Razorpay/Razorpay-Swift.h>
declare var RazorpayCheckout:any;

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss'],
})
export class PaymentComponent implements OnInit {

  constructor() { }

  ngOnInit() {}
  ionViewWillEnter(){
  var options = {
    description: 'Credits towards consultation',
    image: 'http://www.techprocess.co.in/images/paynimo-thumb.png',
    currency: 'INR',
    key: 'rzp_test_ZIpia1muENjWvU',
    // order_id: 'order_7HtFNLS98dSj8x',
    amount: '500000',
    name: 'Payment',
    prefill: {
      email: 'akshatha@gmail.com',
      contact: '8879524924',
      name: 'Akshatha'
    },
    theme: {
      color: '#F37254'
    }
  }
  
  var successCallback = function(success) {
    alert('payment_id: ' + success.razorpay_payment_id)
    var orderId = success.razorpay_order_id
    var signature = success.razorpay_signature
  }
  
  var cancelCallback = function(error) {
    alert(error.description + ' (Error '+error.code+')')
  }
  
  RazorpayCheckout.on('payment.success', successCallback)
  RazorpayCheckout.on('payment.cancel', cancelCallback)
  RazorpayCheckout.open(options)
}

}
