import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Ionicons} from "@expo/vector-icons";

const AppleAuthButton = () => {
    return (
        <TouchableOpacity style={styles.googleButton}>
            <Ionicons name='logo-apple' color='#fff' size={18}/>
            <Text style={styles.googleButtonText}>Continue with Apple</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    googleButton: {
        backgroundColor: '#000',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 17,
        borderRadius: 12,
        gap: 4
    },
    googleButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '600',
    }
})
export default AppleAuthButton
