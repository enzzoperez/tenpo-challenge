import React from 'react';
import {ScrollView, View} from 'react-native';
import {
  CategorieItem,
  DirectionContainer,
  FavItem,
  Header,
  HorizontalList,
  RestaurantItem,
} from '../../components/';
import {ICategorieItem} from '../../components/ui/CategorieItem';
import {IFavItem} from '../../components/ui/FavItem';
import {IRestaurantItem} from '../../components/ui/RestaurantItem';
import {styles} from './styles';

const restaurants = [
  {
    id: 1,
    name: 'McDonalds',
    stars: 3.5,
    delayTime: '10-50min.',
    offPercent: 50,
    bannerUrl:
      'http://abuelarecetas.com/wp-content/uploads/2021/09/Pizza-con-pepperoni.jpg',
    description: 'Combo hamburguesa Bigmac',
    imgUrl:
      'https://static.vecteezy.com/system/resources/thumbnails/002/144/871/small/delicious-hot-burgers-logo-with-lettering-fast-food-free-vector.jpg',
  },
  {
    id: 2,
    name: 'MELT pizzas',
    stars: 4.5,
    delayTime: '10-60min.',
    offPercent: 30,
    bannerUrl:
      'http://abuelarecetas.com/wp-content/uploads/2021/09/Pizza-con-pepperoni.jpg',
    description: 'Pizza Mediana',
    imgUrl:
      'https://static.vecteezy.com/system/resources/thumbnails/002/144/871/small/delicious-hot-burgers-logo-with-lettering-fast-food-free-vector.jpg',
  },
  {
    id: 3,
    name: 'YOKONO',
    stars: 3.5,
    delayTime: '10-50min.',
    offPercent: 20,
    bannerUrl:
      'http://abuelarecetas.com/wp-content/uploads/2021/09/Pizza-con-pepperoni.jpg',
    description: 'Sushi',
    imgUrl:
      'https://static.vecteezy.com/system/resources/thumbnails/002/144/871/small/delicious-hot-burgers-logo-with-lettering-fast-food-free-vector.jpg',
  },
  {
    id: 4,
    name: 'Mostaza',
    stars: 4,
    delayTime: '10-50min.',
    offPercent: 50,
    bannerUrl:
      'http://abuelarecetas.com/wp-content/uploads/2021/09/Pizza-con-pepperoni.jpg',
    description: 'Papas fritas',
    imgUrl:
      'https://static.vecteezy.com/system/resources/thumbnails/002/144/871/small/delicious-hot-burgers-logo-with-lettering-fast-food-free-vector.jpg',
  },
];

const categories = [
  {
    id: 1,
    name: 'Hamburguesas',
    imgUrl:
      'https://www.lavanguardia.com/files/image_449_220/uploads/2019/02/05/5e9980650c362.jpeg',
  },
  {
    id: 2,
    name: 'Italiana',
    imgUrl:
      'https://www.lavanguardia.com/files/image_449_220/uploads/2019/02/05/5e9980650c362.jpeg',
  },
  {
    id: 3,
    name: 'China',
    imgUrl:
      'https://www.lavanguardia.com/files/image_449_220/uploads/2019/02/05/5e9980650c362.jpeg',
  },
];

const HomeScreen = () => {
  const renderRestaurant = ({item}: {item: IRestaurantItem}) => (
    <RestaurantItem {...item} />
  );

  const renderCategorie = ({item}: {item: ICategorieItem}) => (
    <CategorieItem {...item} />
  );

  const renderFavs = ({item}: {item: IFavItem}) => <FavItem {...item} />;

  return (
    <ScrollView>
      <Header />

      <DirectionContainer extraStyles={[styles.curvedCard]} />

      <View style={[styles.curvedCard, styles.body]}>
        <HorizontalList
          data={restaurants}
          renderItem={renderRestaurant}
          titleList={'Restaurantes'}
        />

        <HorizontalList
          data={categories}
          renderItem={renderCategorie}
          titleList={'Categories'}
        />

        <HorizontalList
          data={restaurants}
          renderItem={renderFavs}
          titleList={'Tus favoritos'}
        />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
