type responseItemType = {
    id: number;
    name: string;
}

type WeatherDetailType = {
    zipcode: string;
    weather: string;
    temperature?: number;
}

interface WeatherQueryInterface {
    zipcode: string;
}
