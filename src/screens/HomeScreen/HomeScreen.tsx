import colors from '@/styles/colors';
import { useEffect, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

export default function HomeScreen() {
    const [currentDate, setCurrentDate] = useState<string>('');
    const [currentHour, setCurrentHour] = useState<string>('');
    const user = 'Wectornanime';

    useEffect(() => {
        const getDatetime = () => {
            const date = new Date();
            setCurrentDate(`${String(date.getDate()).padStart(2, '0')}/${String(date.getMonth() + 1).padStart(2, '0')}/${date.getFullYear()}`);
            setCurrentHour(`${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}`);
        }

        const intervalId = setInterval(getDatetime, 1000);

        return () => clearInterval(intervalId);
    });

    return (
        <View style={{ flex: 1, paddingVertical: 5, paddingHorizontal: 10 }}>
            <Text style={{ color: colors.primary, fontSize: 36, fontWeight: '500' }}>Olá {user}</Text>
            <View style={{ alignItems: 'flex-end' }}>
                <Text style={{ color: colors.primary, fontSize: 30, fontWeight: '400' }}>{currentDate}</Text>
                <Text style={{ color: colors.primary, fontSize: 24, fontWeight: '300' }}>{currentHour}</Text>
            </View>

            <View
                style={{
                    height: '100%',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <TouchableOpacity
                    style={{
                        width: 200,
                        paddingVertical: 5,
                        paddingHorizontal: 10,
                        backgroundColor: colors.secondary,
                        borderRadius: 5,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                    <Text style={{ color: colors.white, fontSize: 20, fontWeight: '300' }}>Marcar ponto</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}