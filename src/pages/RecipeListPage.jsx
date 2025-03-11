import { useState } from "react";
import {
  Box,
  Heading,
  Input,
  Checkbox,
  Text,
  Image,
  Grid,
  Badge,
} from "@chakra-ui/react";
import { data } from "../utils/data";

export const RecipeListPage = ({ onSelectRecipe }) => {
  // initial state
  const initialHealthLabels = {
    vegan: false,
    vegetarian: false,
    pescatarian: false,
    glutenFree: false,
    sesameFree: false,
  };

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedHealthLabels, setSelectedHealthLabels] =
    useState(initialHealthLabels);

  // filterfunctie
  const filteredRecipes = data.hits.filter((hit) => {
    const recipe = hit.recipe;
    const matchesSearchTerm = recipe.label
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesHealthLabel = Object.entries(selectedHealthLabels).every(
      ([label, isChecked]) =>
        !isChecked ||
        recipe.healthLabels.some(
          (hl) => hl.toLowerCase().replace(/-/g, "") === label.toLowerCase()
        )
    );

    return matchesSearchTerm && matchesHealthLabel;
  });

  return (
    <Box bg="blue.600" minH="100vh" p={10} color="white">
      <Heading as="h1" textAlign="center" mb={5}>
        Winc Recipe Checker
      </Heading>

      <Box display="flex" justifyContent="center" mb={5}>
        <Input
          type="text"
          placeholder="Search recipes"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          bg="white"
          color="black"
          width="50%"
          borderRadius="10px"
        />
      </Box>

      {/* Health label filters */}
      <Box mb={4} textAlign="center">
        <Text mb={2}>Filter by Health Labels:</Text>
        {Object.keys(selectedHealthLabels).map((label) => (
          <Checkbox
            key={label}
            name={label}
            isChecked={selectedHealthLabels[label]}
            onChange={(e) =>
              setSelectedHealthLabels((prevState) => ({
                ...prevState,
                [e.target.name]: e.target.checked,
              }))
            }
            mx={2}
          >
            {label.charAt(0).toUpperCase() + label.slice(1)}
          </Checkbox>
        ))}
      </Box>

      {/* Receptenlijst */}
      <Grid templateColumns={["1fr", "1fr 1fr", "1fr 1fr 1fr 1fr"]} gap={4}>
        {filteredRecipes.map((hit, index) => {
          const recipe = hit.recipe;
          return (
            <Box
              key={index}
              onClick={() => onSelectRecipe(recipe)}
              p={5}
              bg="white"
              color="black"
              borderRadius="10px"
              boxShadow="lg"
              _hover={{ cursor: "pointer", bg: "gray.200" }}
            >
              <Image
                src={recipe.image}
                alt={recipe.label}
                boxSize="200px"
                objectFit="cover"
                borderRadius="10px"
              />
              <Heading size="md" mt={3}>
                {recipe.label}
              </Heading>
              <Text fontSize="sm" fontWeight="bold">
                {recipe.mealType?.join(", ").toUpperCase()}
              </Text>

              {/* Dish Type */}
              <Text fontSize="sm">
                <strong>Dish:</strong> {recipe.dishType?.join(", ")}
              </Text>

              {/* Diet Labels */}
              {recipe.dietLabels?.length > 0 && (
                <Box mt={2}>
                  {recipe.dietLabels.map((diet, i) => (
                    <Badge key={i} colorScheme="green" mr={1}>
                      {diet.toUpperCase()}
                    </Badge>
                  ))}
                </Box>
              )}

              {/* Health Labels */}
              {recipe.healthLabels && (
                <Box mt={2}>
                  {recipe.healthLabels
                    .filter((label) =>
                      ["vegan", "vegetarian"].includes(
                        label.toLowerCase().replace("-", "")
                      )
                    )
                    .map((label, i) => (
                      <Badge key={i} colorScheme="purple" mr={1}>
                        {label.toUpperCase()}
                      </Badge>
                    ))}
                </Box>
              )}

              {/* Cautions */}
              {recipe.cautions?.length > 0 && (
                <Box mt={2}>
                  <Text fontSize="sm" fontWeight="bold">
                    Cautions:
                  </Text>
                  {recipe.cautions.map((caution, i) => (
                    <Badge key={i} colorScheme="red" mr={1}>
                      {caution.toUpperCase()}
                    </Badge>
                  ))}
                </Box>
              )}
            </Box>
          );
        })}
      </Grid>
    </Box>
  );
};
