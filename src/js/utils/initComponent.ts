/**
 * initComponent
 */

const initComponent = (comp: string): void => {
  console.info(`%cInit: ${comp}`,
    `
      color:white;
      background-color:green;
      font-weight: 700;
      line-height: 1;
      border-radius: 100px;
      padding: 5px 8px 4px 8px
    `);
};

export default initComponent;
