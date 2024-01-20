import { useState, FC } from 'react';
import { ConfigProvider, Button } from 'antd';
import zhCN from 'antd/locale/zh_CN';
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
import 'antd/dist/reset.css';
import { userThemeStore } from '@/store';

dayjs.locale('zh-cn');

const App: FC = () => {
  const [count, setCount] = useState(0);
  const { primaryColor } = userThemeStore();

  return (
    <ConfigProvider
      locale={zhCN}
      theme={{
        token: {
          colorPrimary: primaryColor,
        },
      }}
    >
      <h1>Vite + React</h1>
      <h2>primaryColor is {primaryColor}</h2>
      <div className="card">
        <Button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
      </div>
    </ConfigProvider>
  );
};

export default App;
