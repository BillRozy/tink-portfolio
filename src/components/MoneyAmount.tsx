/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import { Col, Row } from 'react-bootstrap';
import { MoneyValue, Quotation } from '../tinkoff-proto-messages/common';
import Currency from './utility/Currency';
import { formatPrice } from '../common';

const MoneyWidget = ({
  value,
  currency,
  colorize = false,
}: {
  value: MoneyValue | Quotation | number;
  currency?: MoneyValue['currency'];
  colorize?: boolean;
}) => {
  const amount = formatPrice(value);
  if (typeof value !== 'number' && 'currency' in value && !currency) {
    currency = value?.currency;
  }
  return (
    <Row>
      <Col
        css={
          colorize
            ? {
                color: amount > 0 ? 'green' : 'red',
              }
            : {}
        }
      >
        {amount}
        <Currency currency={currency ?? '?'} />
      </Col>
    </Row>
  );
};

export default MoneyWidget;
