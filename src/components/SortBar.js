import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import { Select, Space, ConfigProvider } from 'antd';

const SortBar = observer(() => {
  const {answer} = useContext(Context)

  const handleChange = (value) => {
    answer.setSelectedOrder(value)
  };
  return (
    <div className='sortBar'>Сортировка: 
<ConfigProvider
                theme={{
                    components: {
                       
                      Select: {
                            colorPrimary: 'grey',
                            textHoverBg: 'none',
                            activeBorderColor: 'white',
                            algorithm: true,
                    }
                    },
                }}
                >
    <Space wrap>
    <Select
      defaultValue='ASC'
      size = 'large'
      style={{width: 300, textAlign: 'left'}}
      onChange={handleChange}
      options={[ 
        { value: 'ASC', label: 'По дате, от новых к старым' },
        { value: 'DESC', label: 'По дате, от старых к новым' },
      ]}
    />
  </Space>
  </ConfigProvider>
  </div>
  );
});

export default SortBar;
