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
  Stack,
} from "@chakra-ui/react";
import { data } from "../utils/data";

export const RecipeListPage = ({ onSelectRecipe }) => {
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
    <Box bg="blue.600" minH="100vh" p={[4, 6, 8]} color="white">
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
          width={["100%", "70%", "50%"]}
          borderRadius="10px"
        />
      </Box>

      <Box mb={4} textAlign="center">
        <Text mb={2}>Filter by Health Labels:</Text>
        <Stack direction="row" justify="center" flexWrap="wrap">
          {Object.keys(selectedHealthLabels).map((label) => (
            <Checkbox
              key={label}
              name={label}
              isChecked={selectedHealthLabels[label]}
              onChange={(e) =>
                setSelectedHealthLabels((prev) => ({
                  ...prev,
                  [e.target.name]: e.target.checked,
                }))
              }
              colorScheme="teal"
              mx={2}
            >
              {label.charAt(0).toUpperCase() + label.slice(1)}
            </Checkbox>
          ))}
        </Stack>
      </Box>

      {/* ✅ Grid met 5 kolommen op brede schermen */}
      <Grid
        templateColumns={[
          "1fr", // mobiel
          "repeat(2, 1fr)", // tablet
          "repeat(3, 1fr)", // kleiner desktop
          "repeat(5, 1fr)", // brede desktop
        ]}
        gap={4}
      >
        {filteredRecipes.map((hit, index) => {
          const recipe = hit.recipe;
          return (
            <Box
              key={index}
              onClick={() => onSelectRecipe(recipe)}
              p={3}
              bg="white"
              color="black"
              borderRadius="10px"
              boxShadow="md"
              transition="all 0.2s"
              _hover={{
                cursor: "pointer",
                bg: "gray.100",
                transform: "scale(1.02)",
              }}
            >
              <Image
                src={recipe.image}
                alt={recipe.label}
                height="100px"
                width="100%"
                objectFit="cover"
                borderRadius="8px"
              />
              <Heading size="sm" mt={2} noOfLines={2}>
                {recipe.label}
              </Heading>
              <Text fontSize="xs" fontWeight="bold">
                {recipe.mealType?.join(", ").toUpperCase()}
              </Text>

              <Text fontSize="xs">
                <strong>Dish:</strong> {recipe.dishType?.join(", ")}
              </Text>

              {recipe.dietLabels?.length > 0 && (
                <Box mt={1}>
                  {recipe.dietLabels.map((diet, i) => (
                    <Badge key={i} colorScheme="green" mr={1} fontSize="0.6em">
                      {diet.toUpperCase()}
                    </Badge>
                  ))}
                </Box>
              )}

              {recipe.healthLabels && (
                <Box mt={1}>
                  {recipe.healthLabels
                    .filter((label) =>
                      ["vegan", "vegetarian"].includes(
                        label.toLowerCase().replace("-", "")
                      )
                    )
                    .map((label, i) => (
                      <Badge
                        key={i}
                        colorScheme="purple"
                        mr={1}
                        fontSize="0.6em"
                      >
                        {label.toUpperCase()}
                      </Badge>
                    ))}
                </Box>
              )}

              {recipe.cautions?.length > 0 && (
                <Box mt={1}>
                  <Text fontSize="xs" fontWeight="bold">
                    Cautions:
                  </Text>
                  {recipe.cautions.map((caution, i) => (
                    <Badge key={i} colorScheme="red" mr={1} fontSize="0.6em">
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
