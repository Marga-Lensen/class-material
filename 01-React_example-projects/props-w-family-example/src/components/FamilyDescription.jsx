
export default function FamilyDescription({familyName,isMarried,city,
  familyValues}) {
  return (
    <section>
      <h2>Meet the {familyName} family 👪️:</h2>
      <p>They live in {city}.</p>
      <p>They are {isMarried ? "married" : "not married"}.</p>

      <h3>They hold these family values:</h3>
      <ul>
        {familyValues.map((value) => (
          <li key={value}>{value}</li>
        ))}
      </ul>
    </section>
  );
} 