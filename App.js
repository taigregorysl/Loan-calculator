import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

export default function App() {

  const [price,setPrice] = useState('');
  const [year,setYear] = useState('');
  const [loanPct,setLoanPct] = useState('');
  const [dpPct,setDpPct] = useState('');
  const [monthlyPayment,setMonthlyPayment] = useState('');

  const calculateAmount = () =>{
    let interest = loanPct/100
    let annualInterest = interest;
    let dp = 0.1 * price;
    let amount = price - dp
    let discount = (Math.pow((1+ annualInterest),year)-1)/
    (annualInterest*(Math.pow(1+ annualInterest,year)))
    let yearlypayment = amount / discount
    let monthly = yearlypayment /12
    setMonthlyPayment(monthly.toFixed(2));
  }


  return (
    <View style={styles.container}>
      <Text>Loan Calculator</Text>

      <TextInput
      placeholder="Enter the Price of Property"
      value={price}
      style={styles.input}
      onChangeText={(val)=> setPrice(val)}
      />
      <TextInput
      placeholder="Enter the Number of Years"
      value={year}
      style={styles.input}
      onChangeText={(val)=> setYear(val)}
      />
      <TextInput
      placeholder="Enter the Loan Percentage"
      value={loanPct}
      style={styles.input}
      onChangeText={(val)=> setLoanPct(val)}
      />
      <TextInput
      placeholder="Enter the down payment percentage"
      value={dpPct}
      style={styles.input}
      onChangeText={(val)=> setDpPct(val)}
      />

<Button title="Calculate My Loan" onPress={calculateAmount}></Button>
      <Text>{monthlyPayment}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding:50,
    flex: 1,
    backgroundColor:'#fff' ,
    alignItems: 'center',
   
  },

  input: {
height:40,
borderWidth:1,
marginVertical:5,
width:300,
padding:5
  }
});
