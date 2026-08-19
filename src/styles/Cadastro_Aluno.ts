import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#13091D',
      },
      content: {
        flex: 1,
        padding: 24,
        justifyContent: 'center',
      },
      title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#D8B4FE',
        marginBottom: 8,
        textAlign: 'center',
      },
      subtitle: {
        fontSize: 16,
        color: '#A78BFA',
        marginBottom: 28,
        textAlign: 'center',
      },
      label: {
        fontSize: 14,
        color: '#EDE9FE',
        fontWeight: '600',
        marginBottom: 8,
        marginTop: 10,
      },
      input: {
        backgroundColor: '#261438',
        borderWidth: 1,
        borderColor: '#6D28D9',
        borderRadius: 10,
        padding: 14,
        fontSize: 16,
        color: '#FFFFFF',
        marginBottom: 6,
      },
      buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 32,
        gap: 12,
      },
      button1: {
        flex: 1,
        backgroundColor: '#8B5CF6',
        paddingHorizontal: 4,
        borderRadius: 10,
        alignItems: 'center',
      },
      button2: {
        flex: 1,
        backgroundColor: '#261438',
        paddingHorizontal: 4,
        borderRadius: 10,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#8B5CF6',
      },
      buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
      },
      buttonTextSecondary: {
        color: '#C4B5FD',
        fontSize: 16,
        fontWeight: 'bold',
      },
});
