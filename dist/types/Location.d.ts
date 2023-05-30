type LocationHint = {
    country: string;
    state: string;
    city: string;
    zipCode: string;
    timezoneOffset: number;
    countryConfidence: number;
    cityConfidence: number;
    Center: {
        Latitude: number;
        Longitude: number;
    };
    RegionType: number;
    SourceType: number;
};
