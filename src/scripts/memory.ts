import AsyncStorage from "@react-native-async-storage/async-storage"

export const saveMemory = async (key: string, value: string) => {
    try {
        await AsyncStorage.setItem(key, value)
    } catch (error) {
        console.error(error);
    };
};

export const loadMemory = async(key: string) => {
    try {
        const value = await AsyncStorage.getItem(key);
        return value;
    } catch (error){
        console.error(error);
    }
    return null;
};
