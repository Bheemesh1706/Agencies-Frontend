import React ,{useState} from 'react';
import { Button, View ,Text } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';



export default function DashBoard()
{
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        {label: 'Apple', value: 'apple'},
        {label: 'Banana', value: 'banana'}
      ]);


      

    return(
        <View>
            <DropDownPicker
                 multiple={true}
                 min={0}
                 max={5}
                 open={open}
                 value={value}
                 items={items}
                 setOpen={setOpen}
                 setValue={setValue}
                 setItems={setItems}
                 showTickIcon={false}
                 placeholder="Menu"
                 placeholderStyle={{
                    color: "red",
                    fontWeight: "bold",
                    backgroundColor: "black",
                    marginLeft: 350,
                    padding: 5

                  }}
                  dropDownDirection="BOTTOM"
                 showArrowIcon={false}
                 dropDownContainerStyle={{
                    backgroundColor: "red",
                    borderRadius: 0,
                    flex: 1,
                    alignItems: 'center',
                    
                  }}
                  disableBorderRadius={true}
                  onChangeValue={(value) => {
                    console.log(value);
                    setValue(null);
                    setOpen(false);
                  }}
                  onPress={(open) => console.log('was the picker open?', open)}
            />
        </View>
    );
}