import { Component } from '@angular/core';
import { OfferCardComponent } from '../offer-card/offer-card.component'; // استيراد OfferCardComponent
import { CommonModule } from '@angular/common'; // استيراد CommonModule

@Component({
  selector: 'app-offers',
  standalone: true, // اجعل OffersComponent مستقلًا
  imports: [OfferCardComponent , CommonModule], // استيراد OfferCardComponent هنا
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})
export class OffersComponent {
  offers = [
    {
      title: 'Product 1',
      description: '20% off on Product 1. Limited time offer!',
      discount: 20,
      imageUrl: ''
    },
    {
      title: 'Product 2',
      description: 'Buy one, get one free on Product 2. Don’t miss out!',
      discount: 50,
      imageUrl: 'https://via.placeholder.com/300x200'
    },
    {
      title: 'Product 3',
      description: 'Save 30% on Product 3. Best deal this week!',
      discount: 30,
      imageUrl: 'https://via.placeholder.com/300x200'
    }
  ];

  addToCart(offer: any) {
    console.log('Offer added to cart:', offer);
    // هنا يمكنك إضافة منطق إضافة العرض إلى عربة التسوق
  }
}
