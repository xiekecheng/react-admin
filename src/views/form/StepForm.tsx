/*
 * @Author: your name
 * @Date: 2021-08-17 20:55:49
 * @LastEditors: xkccoding@gmail.com
 * @LastEditTime: 2021-08-17 21:50:15
 * @FilePath: /react-admin/src/views/form/StepForm.tsx
 */
import React from 'react';
import { Steps, Button, message } from 'antd';
import Transfer from './components/Transfer';
import Confirm from './components/Confirm.jsx';
const { Step } = Steps;

const steps = [
  {
    title: '填写转账信息',
    content: <Transfer/>,
  },
  {
    title: '确认转账信息',
    content: <Confirm/>,
  },
  {
    title: '完成',
    content: 'Last-content',
  },
];
const StepForm = () => {
	const [current, setCurrent] = React.useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };
	return (
		<div className="my-step-form">
			<h1>分步表单</h1>
			<Steps current={current}>
        {steps.map(item => (
          <Step key={item.title} title={item.title} />
        ))}
      </Steps>
      <div className="steps-content">{steps[current].content}</div>
      <div className="steps-action">
        {current < steps.length - 1 && (
          <Button type="primary" onClick={() => next()}>
            Next
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button type="primary" onClick={() => message.success('Processing complete!')}>
            Done
          </Button>
        )}
        {current > 0 && (
          <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
            Previous
          </Button>
        )}
      </div>
		</div>
	);
};

export default StepForm;