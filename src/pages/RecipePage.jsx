import {
  Box,
  Grid,
  Heading,
  Text,
  Image,
  UnorderedList,
  ListItem,
  Button,
  Badge,
  VStack,
  Divider,
} from "@chakra-ui/react";

export const RecipePage = ({ recipe, onBack }) => {
  return (
    <Box bg="blue.600" minH="100vh" p={10} color="white">
      <Box maxW="900px" mx="auto" bg="white" p={6} borderRadius="10px">
        <Button onClick={onBack} mb={5} colorScheme="blue">
          ← Back
        </Button>

        <Grid templateColumns={["1fr", "1fr", "1fr 1fr"]} gap={6}>
          <Box gridColumn={["1 / span 1", "1 / span 1", "1 / span 2"]}>
            <Image
              src={recipe.image}
              alt={recipe.label}
              width="30%"
              maxHeight="250px"
              objectFit="cover"
              borderRadius="10px"
            />
          </Box>

          {/* Recipe Information */}
          <VStack align="start" color="black" spacing={2}>
            <Heading size="lg">{recipe.label}</Heading>
            <Text fontSize="sm">
              <strong>Meal Type:</strong>{" "}
              {recipe.mealType?.join(", ").toUpperCase()}
            </Text>
            <Text fontSize="sm">
              <strong>Dish Type:</strong> {recipe.dishType?.join(", ")}
            </Text>
            <Text fontSize="sm">
              <strong>Total Cooking Time:</strong>{" "}
              {recipe.totalTime === 0
                ? "Unknown"
                : `${recipe.totalTime} minutes`}
            </Text>
            <Text fontSize="sm">
              <strong>Servings:</strong> {recipe.yield}
            </Text>

            {/* Diet Labels */}
            {recipe.dietLabels.length > 0 && (
              <Box>
                <Text fontWeight="bold">Diet:</Text>
                {recipe.dietLabels.map((diet, i) => (
                  <Badge key={i} colorScheme="green" mr={1}>
                    {diet.toUpperCase()}
                  </Badge>
                ))}
              </Box>
            )}

            {/* Health Labels */}
            <Box>
              <Text fontWeight="bold">Health labels:</Text>
              {recipe.healthLabels.map((label, i) => (
                <Badge key={i} colorScheme="purple" mr={1}>
                  {label.toUpperCase()}
                </Badge>
              ))}
            </Box>

            {/* Cautions */}
            {recipe.cautions.length > 0 && (
              <Box>
                <Text fontWeight="bold">Cautions:</Text>
                {recipe.cautions.map((caution, i) => (
                  <Badge key={i} colorScheme="red" mr={1}>
                    {caution.toUpperCase()}
                  </Badge>
                ))}
              </Box>
            )}
          </VStack>
        </Grid>

        {/* Divider */}
        <Divider my={6} />

        {/* Ingredients */}
        <Box color="black">
          <Heading size="md" mb={2}>
            Ingredients:
          </Heading>
          <UnorderedList>
            {recipe.ingredients.map((ingredient, index) => (
              <ListItem key={index}>
                {ingredient.text}{" "}
                {ingredient.foodCategory && (
                  <Text fontSize="xs" color="gray.500">
                    ({ingredient.foodCategory})
                  </Text>
                )}
              </ListItem>
            ))}
          </UnorderedList>
        </Box>

        {/* Divider */}
        <Divider my={6} />

        {/* Total Nutrients */}
        <Box color="black">
          <Heading size="md" mb={2}>
            Total Nutrients:
          </Heading>
          <Text>
            <strong>Energy:</strong>{" "}
            {recipe.totalNutrients.ENERC_KCAL.quantity.toFixed(2)}{" "}
            {recipe.totalNutrients.ENERC_KCAL.unit}
          </Text>
          <Text>
            <strong>Carbs:</strong>{" "}
            {recipe.totalNutrients.CHOCDF.quantity.toFixed(2)}{" "}
            {recipe.totalNutrients.CHOCDF.unit}
          </Text>
          <Text>
            <strong>Protein:</strong>{" "}
            {recipe.totalNutrients.PROCNT.quantity.toFixed(2)}{" "}
            {recipe.totalNutrients.PROCNT.unit}
          </Text>
          <Text>
            <strong>Fat:</strong>{" "}
            {recipe.totalNutrients.FAT.quantity.toFixed(2)}{" "}
            {recipe.totalNutrients.FAT.unit}
          </Text>
          <Text>
            <strong>Cholesterol:</strong>{" "}
            {recipe.totalNutrients.CHOLE.quantity.toFixed(2)}{" "}
            {recipe.totalNutrients.CHOLE.unit}
          </Text>
          <Text>
            <strong>Sodium:</strong>{" "}
            {recipe.totalNutrients.NA.quantity.toFixed(2)}{" "}
            {recipe.totalNutrients.NA.unit}
          </Text>
        </Box>
      </Box>
    </Box>
  );
};
