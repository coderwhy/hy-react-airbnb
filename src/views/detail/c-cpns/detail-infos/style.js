import styled from 'styled-components'

export const InfoWrapper = styled.section`
  width: min(1080px, calc(100% - 48px));
  margin: 0 auto;
  padding: 40px 0 12px;
  display: grid;
  grid-template-columns: minmax(0, 1fr) 320px;
  gap: 48px;
  color: #222;

  .info-content {
    min-width: 0;
  }

  .eyebrow {
    color: #767676;
    font-size: 14px;
    line-height: 1.5;
  }

  h1 {
    margin: 8px 0 16px;
    font-size: 28px;
    line-height: 1.3;
    overflow-wrap: anywhere;
  }

  .rating-row {
    display: flex;
    align-items: center;
    gap: 8px;
    color: #484848;
    font-size: 14px;

    .MuiRating-root {
      color: #ff385c;
    }

    .dot {
      color: #767676;
    }
  }

  .info-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 18px 24px;
    margin-top: 32px;
    padding-top: 24px;
    border-top: 1px solid #ebebeb;
  }

  .info-item {
    min-width: 0;
  }

  .label {
    margin-bottom: 5px;
    color: #767676;
    font-size: 13px;
  }

  .value {
    font-size: 15px;
    font-weight: 600;
    overflow-wrap: anywhere;
  }

  .price-card {
    align-self: start;
    padding: 24px;
    border: 1px solid #dddddd;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  }

  .price {
    color: #222;
    font-size: 14px;

    strong {
      font-size: 24px;
    }

    span {
      color: #767676;
    }
  }

  .price-note {
    margin-top: 8px;
    color: #767676;
    font-size: 12px;
  }

  .demo-note {
    margin-top: 20px;
    padding-top: 18px;
    border-top: 1px solid #ebebeb;
    color: #767676;
    font-size: 13px;
    line-height: 1.6;
  }

  @media (max-width: 768px) {
    width: calc(100% - 32px);
    padding: 28px 0 8px;
    display: block;

    h1 {
      font-size: 22px;
    }

    .price-card {
      margin-top: 24px;
    }
  }
`
