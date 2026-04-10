import FamilyDescription from "./FamilyDescription";

export default function Father() {
  const familyValues = ["honesty", "responsibility", "hard work"];

  return (
    <FamilyDescription
      familyName="Molenaar"
      language="Dutch"
      favoriteFood="Cheese"
      city="Amsterdam"
      familySize={5}
      isMarried={true}
      familyValues={familyValues}
    />
  );
}