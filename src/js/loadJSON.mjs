export default async function loadJSON() {
  try {
    const response = await fetch("../../texts.json");
    const text = await response.json();
    return text;
  } catch (error) {
    console.error("Error loading the file: ", error);
  }
}
