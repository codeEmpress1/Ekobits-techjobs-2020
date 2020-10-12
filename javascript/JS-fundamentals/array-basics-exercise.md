### Array Basics Exercises
1. Create an array of your favorite foods (call it favoriteFoods). Make sure it has at least three elements.
#### Ans.
        let favoriteFoods = ["rice", "oat", "noodles"]

2. Access the second element in favoriteFoods.
Change the last element in favoriteFoods to some other food.
#### Ans
        favoriteFoods[1]

3. Remove the first element in favoriteFoods and store it in a variable called formerFavoriteFood.
#### Ans
        formerFavoriteFoods = favoriteFoods.splice(0,1)

4. Add a favorite food to the back of the favoriteFoods array.
#### Ans
        favoriteFood.push("Yam")

5. Add a favorite food to the front of the favoriteFoods array.
#### Ans
        favoriteFood.unshift("beans")

6. What happens when you try to pop from an empty array?
#### Ans
        It returns "undefined"

7. In the examples below, use splice to convert the first array to the second array:
-  [2, 3, 4, 5] -> [2, 4, 5]
##### Ans
        [2,3,4,5].splice(1,1)

- ["alpha", "gamma", "delta"] -> ["alpha", "beta", "gamma", "delta"]
##### Ans
        ["alpha", "gamma", "delta"].splice(1,0,"beta")
        
- [10,-10,-5,-3,2,1] -> [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
##### Ans
        [10,-10,-5,-3,2,1].splice(1,3,9,8,7,6,5,4,3)              
