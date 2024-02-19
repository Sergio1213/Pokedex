const reqPokemon = () => {
  axios
    .get('https://pokeapi.co/api/v2/pokemon/pikachu')
    .then(function (response) {
      const {
        data: {
          name,
          height,
          weight,
          id,
          types,
          sprites: { front_default: image_pokemon },
        },
      } = response;
      console.log(response);
      console.log(
        'name: ',
        name,
        'height: ',
        height,
        ' weight: ',
        weight,
        ' id: ',
        id,
        'url_image_pokemon: ',
        image_pokemon
      );
      for (let i = 0; i < types.length; i++) {
        console.log(types[i].type.name);
      }
    });
};
reqPokemon();
