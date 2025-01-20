export interface Destination {
    id: string; // Unique identifier for the destination
    name: string; // Name of the destination (e.g., city or country)
    imageUrl: string; // URL of the destination image
    airportName: string; // Name of the associated airport
    airportWebsite: string; // URL of the airport's website
    email: string; // Contact email for the destination
    destinationCode: string; // Three-letter destination code (e.g., LAX, TLV)
  }
  