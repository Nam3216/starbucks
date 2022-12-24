import React from "react";

const MockMenu=[
    {
        id:1,
        img:"starbucks/bagel-modified.png",
        imgDetail:"https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-03%2FBagel-Multicereal-425-x-425.png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop",
        title:"Bagel",
        price:200,
        quantity:1,
        description:"Classic soft, chewy and thick New York–style bagel. Available with cream cheese or butter",
        category:"drink",
        rating:"10/10"
        
    },
    {   id:2,
        img:"starbucks/coldcofee-modified.png",
        imgDetail:"https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-03%2FShaken%20Espresso%20Frio%20Chocolate.png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop",
        title:"Cold Coffee",
        price:400,
        quantity:1,
        description:"Starbucks® Cold Brew sweetened with vanilla syrup and topped with a pumpkin cream cold foam and a dusting of pumpkin spice topping",
        category:"drink",
        rating:"8/10"
        
    },
    {   
        id:3,
        img:"starbucks/colddrink-modified.png",
        imgDetail:"https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-03%2FFrozen%20Frutilla%20A%C3%A7ai%20425x425%20sin%20fondo.png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop",
        title:"Cold Drink",
        price:200,
        quantity:1,
        description:"Tropical flavors of pineapple and passionfruit mix with diced pineapple to create an island escape--oh so refreshing.",
        category:"drink",
        rating:"9/10"
        
    },
    {   
        id:4,
        img:"starbucks/frapuccino-modified.png",
        imgDetail:"https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-03%2FCaramel%20Frapp%20425x425%20sin%20fondo%20(1).png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop",
        title:"Frapuccino",
        price:500,
        quantity:1,
        description:"Pumpkin plus traditional fall spice flavors, blended with coffee, milk and ice and topped with whipped cream and pumpkin-pie spice. Think of it as the ultimate fall care package.",
        category:"drink",
        rating:"9/10"
        
    },
    {   
        id:5,
        img:"starbucks/hotcoffee-modified.png",
        imgDetail:"https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-03%2FAmericano%20425x425%20sin%20fondo.png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop",
        title:"Hot Coffee",
        price:300,
        quantity:1,
        description:"Espresso shots topped with hot water create a light layer of crema culminating in this wonderfully rich cup with depth and nuance.",
        category:"drink",
        rating:"7/10"
        
    },
    {   
        id:6,
        img:"starbucks/hottea-modified.png",
        imgDetail:"https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-03%2FChai%20425x425%20sin%20fondo.png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop",
        title:"Hot Tea",
        price:200,
        quantity:1,
        description:"We take a strong black tea base and add the essence of bergamot, a citrus fruit with subtle lemon and floral lavender notes, to create this aromatically awesome tea flavor.",
        category:"drink",
        rating:"10/10"
        
    },
    {   
        id:7,
        img:"starbucks/icedtea-modified.png",
        imgDetail:"https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-03%2FTe%20Verde%20Frutilla%20425x425%20sin%20fondo.png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop",
        title:"Iced Tea",
        price:200,
        quantity:1,
        description:"Premium black tea sweetened just right and shaken with ice to create an ideal iced tea—a rich and flavorful black tea journey awaits you.",
        category:"drink",
        rating:"8/10"
        
    }, {
        id:8,
        img:"starbucks/icedtea-modified.png",
        imgDetail:"https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-03%2FTe%20Verde%20Frutilla%20425x425%20sin%20fondo.png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop",
        title:"Iced Tea",
        price:200,
        quantity:1,
        description:"Premium black tea sweetened just right and shaken with ice to create an ideal iced tea—a rich and flavorful black tea journey awaits you.",
        category:"drink",
        rating:"9/10"
        
    }, {
        id:9,
        img:"starbucks/icedtea-modified.png",
        imgDetail:"https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-03%2FTe%20Verde%20Frutilla%20425x425%20sin%20fondo.png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop",
        title:"Iced Tea",
        price:200,
        quantity:1,
        description:"Premium black tea sweetened just right and shaken with ice to create an ideal iced tea—a rich and flavorful black tea journey awaits you.",
        category:"drink",
        rating:"10/10"
        
    },
    {   
        id:10,
        img:"starbucks/oatmeal-modified.png",
        imgDetail:"https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-03%2FPorridge-425.png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop",
        title:"Oat Meal",
        price:100,
        quantity:1,
        description:"A blend of rolled and whole-grain steel-cut oats to customize any way you want with a selection of toppings: dried fruit, nut medley, brown sugar, agave or blueberries.",
        category:"food",
        rating:"10/10"
        
    },
    {   
        id:11,
        img:"starbucks/sandwich-modified.png",
        imgDetail:"https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-03%2FSand-JyQ-Gluten-Free-425-x-425.png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop",
        title:"Sandwich",
        price:400,
        quantity:1,
        description:"A blend of white Cheddar and mozzarella cheeses on sourdough bread, topped with a Parmesan butter spread",
        category:"food",
        rating:"7/10"
        
    },
    {   
        id:12,
        img:"starbucks/snacks-modified.png",
        imgDetail:"https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-03%2FMix-frutos-secos-425.png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop",
        title:"Snacks",
        price:200,
        quantity:1,
        description:"This gingerbread biscotti makes a festively flavored, crunchy and dippable baked treat that perfectly complements your coffee.",
        category:"food",
        rating:"10/10"
        
    },
    {   
        id:13,
        img:"starbucks/wrap-modified.png",
        imgDetail:"https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-03%2FCheese-Avocado-Toast-425-x-425.png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop",
        title:"Wrap",
        price:500,
        quantity:1,
        description:"Double-smoked bacon, savory pork sausage and cage-free scrambled eggs combined with Cheddar cheese and potatoes--all wrapped in a flour tortilla.",
        category:"food",
        rating:"8/10"
        
    },
    {   
        id:14,
        img:"starbucks/wrap-modified.png",
        imgDetail:"https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-03%2FCheese-Avocado-Toast-425-x-425.png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop",
        title:"Wrap",
        price:500,
        quantity:1,
        description:"Double-smoked bacon, savory pork sausage and cage-free scrambled eggs combined with Cheddar cheese and potatoes--all wrapped in a flour tortilla.",
        category:"food",
        rating:"10/10"
        
    },
    {   
        id:15,
        img:"starbucks/wrap-modified.png",
        imgDetail:"https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-03%2FCheese-Avocado-Toast-425-x-425.png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop",
        title:"Wrap",
        price:500,
        quantity:1,
        description:"Double-smoked bacon, savory pork sausage and cage-free scrambled eggs combined with Cheddar cheese and potatoes--all wrapped in a flour tortilla.",
        category:"food",
        rating:"10/10"
        
    },
    
]

export default MockMenu