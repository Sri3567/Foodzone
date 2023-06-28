import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor() { }

  // fooddetails 
  
  foodDetails = [
    {
      id: 1,
      foodName: "Chicken Biryani",
      foodDetails: "Basmati rice cooked with succulent pieces of chicken in aromatic spices, served with raita.",
      foodPrice: 250,
      foodImg: "https://vismaifood.com/storage/app/uploads/public/914/f47/fa9/thumb__700_0_0_0_auto.jpg"
    },
    {
      id: 2,
      foodName: "Veg Meals",
      foodDetails: "A wholesome meal with rice, dal, vegetables, and salad.",
      foodPrice: 249,
      foodImg: "https://www.munnar.holiday/munnartourism/wp-content/uploads/2018/10/popular-vegetarian-food-in-munnar-kerala-800x385.jpg"
    },
    {
      id:3,
      foodName:"Aloo Paratha",
      foodDetails:"Onion| Green Capsicum|Mushroom |black olives, Red Paprika topped with Cheese",
      foodPrice:60,
      foodImg:"https://i.pinimg.com/originals/5f/c5/eb/5fc5eb0b34978d1185b9c20bf323962c.jpg"
    },
    {
      id: 4,
      foodName: "Butter Chicken",
      foodDetails: "Tender pieces of chicken cooked in a creamy tomato-based sauce, served with naan.",
      foodPrice: 250,
      foodImg: "https://gimmedelicious.com/wp-content/uploads/2020/01/30-Minute-Instant-Pot-Butter-Chicken-7.jpg"
    },
    {
      id: 5,
      foodName: "KFC Buckets",
      foodDetails: "Crispy and juicy fried chicken served in a bucket with sides.",
      foodPrice: 699,
      foodImg: "https://i.pinimg.com/originals/f1/cb/02/f1cb0261b08e035658c4039180792bd1.jpg"
    },
    {
      id: 6,
      foodName: "Chinese Combo",
      foodDetails: "A combo meal with burger,stir-fried vegetables, meat or seafood, fries, and a drink.",
      foodPrice: 199,
      foodImg: "https://i.pinimg.com/originals/f4/f4/35/f4f4353f2a104f70180897d2ad61e6be.jpg"
    },
    {
      id: 7,
      foodName: "Margherita Pizza",
      foodDetails: "Tomato sauce, mozzarella cheese, and fresh basil on a thin crust.",
      foodPrice: 299,
      foodImg: "https://static.toiimg.com/thumb/53110049.cms?imgsize=148092&width=509&height=340"
    },
    {
      id:8,
      foodName:"Paneer Burger",
      foodDetails:"Paneer burger is a vegetarian burger that includes paneer as the main ingredient.",
      foodPrice:149,
      foodImg:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/xbeqlsck3p0kei53to7k"
    },
    {
      id: 9,
      foodName: "French Fries",
      foodDetails: " frying sliced potatoes until they are crispy and golden brown.",
      foodPrice: 79,
      foodImg: "https://i.pinimg.com/originals/58/cf/7a/58cf7a13617b0f7945f2636b9c63f9ba.jpg"
    },
    {
      id: 10,
      foodName: "Pav Bhaji",
      foodDetails: "A popular Indian street food dish made with mashed vegetables and spices, served with buttered pav buns.",
      foodPrice: 120,
      foodImg: "https://gkidea.in/wp-content/uploads/2021/01/pav_bhaji_recipe_in_hindi.jpg"
    },
    {
      id:11,
      foodName:"Paneer Grilled Sandwich",
      foodDetails:"Paneer grilled sandwich is a vegetarian sandwich made with paneer, a type of Indian cheese.",
      foodPrice:200,
      foodImg:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/wzfq7djolqxgdhghebbq"
    },{
      id:12,
      foodName:"Veg Masala Roll In Naan",
      foodDetails:"A homely mix of mashed potato and veggies, seasoned with Indian spices. A filling sure to take you back to mom's kitchen.",
      foodPrice:140,
      foodImg:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/l2ng6gtge30sqaafqng7"
    },
    {
      id:13,
      foodName:"Indulgence Brownie",
      foodDetails:"(Eggless) Indulge in richly decadent chocolate brownie crafted with love & topped with bitter-sweet chocolate that provides ultra-rich chocolate experience.",
      foodPrice:105,
      foodImg:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/iqlmbg1hlyc0dspdyzzv"
    },
    {
      id:14,
      foodName:"Oreo Cheesecake Ice Cream",
      foodDetails:"Oreo cheesecake ice cream is a delicious frozen dessert that combines the flavors of Oreo cookies and cheesecake,sweet treat on a hot day. ",
      foodPrice:219,
      foodImg:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/wtj8esaeslvlscv8glj6"
    },
    {
      id: 15,
      foodName: "Mojitos",
      foodDetails: "A refreshing drink made with mint, lime, sugar, and soda,Mojitos are a classic Cuban cocktail made with rum, lime juice, sugar, mint leaves, and soda water.",
      foodPrice: 99,
      foodImg: "https://www.troprockin.com/wp-content/uploads/2022/05/blue-mojito-recipe-735x459.jpg.webp"
    },

   

  ]


  

}
