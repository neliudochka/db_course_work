# Тестування працездатності системи

Для тестування системи використовувся Postman  

Був реалізований доступ до наступних таблиць: Role, Grant, RoleGrant


## Role

<a name="addRole"></a>

### Додавання нової сутності (POST)

Спробуємо додати сутність ***не вказавши тіло запиту***:

<center>

![](../../assets/images/testScreenshots/Role/add_no_body.png )  

</center>

Додамо у запит [slug](../../design/README.md#role) :

<center>

![](../../assets/images/testScreenshots/Role/add_ok.png )  

</center>


Спробуємо додати ту ж саму сутність ***ще раз***:


<center>

![](../../assets/images/testScreenshots/Role/add_same.png )  

</center>


### Відображення сутностей (GET)

Відобразимо ***усі*** сутності:

<center>

![](../../assets/images/testScreenshots/Role/get_all.jpg )  

</center>

Відобразимо сутність за обраним ***id*** :

<center>

![](../../assets/images/testScreenshots/Role/get_with_id.png )  

</center>


### Видалити сутність (DELETE)

Видалимо сутність вказавши її ***id*** :

<center>

![](../../assets/images/testScreenshots/Role/delete_ok.png )  

</center>

Спробуємо видалити вже видалену сутність ***ще раз***:

<center>

![](../../assets/images/testScreenshots/Role/delete_same.png )  

</center>


## Grant

<a name="addGrant"></a>

### Додавання нової сутності (POST)

Спробуємо додати сутність ***не вказавши тіло запиту***:

<center>

![](../../assets/images/testScreenshots/Grant/post_without_body.png )  

</center>

Спробуємо додати ***вже існуючу*** сутність:

<center>

![](../../assets/images/testScreenshots/Grant/post_existed.png )  

</center>


Додамо у запит [slug](../../design/README.md#grant) :

<center>

![](../../assets/images/testScreenshots/Grant/post_ok.png )  

</center>

### Відображення сутностей (GET)

Відобразимо ***усі*** сутності:

<center>

![](../../assets/images/testScreenshots/Grant/get_all.jpg )  

</center>

Відобразимо сутність за обраним ***id*** :

<center>

![](../../assets/images/testScreenshots/Grant/get_by_id.png )  

</center>


### Видалити сутність (DELETE)

Видалимо сутність вказавши її ***id*** :

<center>

![](../../assets/images/testScreenshots/Grant/delete_ok.png )  

</center>

Спробуємо видалити вже видалену сутність ***ще раз***:

<center>

![](../../assets/images/testScreenshots/Grant/delete_same.png )  

</center>



## RoleGrant

### Додавання нової сутності (POST)

Спробуємо додати сутність ***не вказавши тіло запиту***:

<center>

![](../../assets/images/testScreenshots/RoleGrant/post_no_body.png )  

</center>

Спробуємо додати сутність ***з роллю, що не належить до таблиці Roles***:

<center>

![](../../assets/images/testScreenshots/RoleGrant/post_no_role.png )  

</center>

Створимо відповідну роль, як показано [тут](#addRole)  
Спробуємо додати сутність ***з ґрантом, що не належить до таблиці Grant***:  

<center>

![](../../assets/images/testScreenshots/RoleGrant/post_no_grant.png )  

</center>

Створимо відповідний ґрант, як показано [тут](#addGrant)  
Тепер спробуємо додати сутність ще раз :

<center>

![](../../assets/images/testScreenshots/RoleGrant/post_ok.png)  

</center>

Спробуємо додати цю сутність ***ще раз***:

<center>

![](../../assets/images/testScreenshots/RoleGrant/post_same.png )  

</center>



### Відображення сутностей (GET)

Відобразимо ***усі*** сутності:

<center>

![](../../assets/images/testScreenshots/RoleGrant/get_all.jpg )  

</center>

Відобразимо сутності за ***Role_id***  :

<center>

![](../../assets/images/testScreenshots/RoleGrant/get_by_id.png )  

</center>

Ще один приклад:

<center>

![](../../assets/images/testScreenshots/RoleGrant/get_by_id_long.png )  

</center>

### Видалити сутність (DELETE)

Видалимо сутність вказавши її ***Role_id*** та ***Grant_id***:

<center>

![](../../assets/images/testScreenshots/RoleGrant/delete_ok.png )  

</center>

Спробуємо видалити вже видалену сутність ***ще раз***:

<center>

![](../../assets/images/testScreenshots/RoleGrant/delete_same.png )  

</center>