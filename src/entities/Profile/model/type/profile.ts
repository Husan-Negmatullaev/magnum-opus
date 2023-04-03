import { Currency } from 'entities/CurrencySelect/model/type/currency';
import { Country } from 'entities/CountrySelect/model/type/country';

export enum ValidateProfileErrors {
    NO_DATA = 'NO_DATA',
    SERVER_ERROR = 'SERVER_ERROR',
    INVALID_NAMES_DATA = 'INVALID_NAMES_DATA',
    INVALID_AGE = 'INVALID_AGE',
    INVALID_GEO_DATA = 'INVALID_GEO_DATA',
    INVALID_USER_DATA = 'INVALID_USER_DATA'
}

export interface Profile {
    first?: string,
    lastname?: string,
    age?: number,
    currency?: Currency,
    country?: Country,
    city?: string,
    username?: string,
    avatar?: string
}

export interface ProfileScheme {
    data?: Profile;
    form?: Profile;
    isLoading: boolean;
    error?: string;
    readonly: boolean;
    validateErrors?: ValidateProfileErrors[];
}
