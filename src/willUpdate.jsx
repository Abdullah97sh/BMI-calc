import React from 'react';

class WillUpdate extends React.Component {
   state = { color: 'green' };
   render() {
      setTimeout(() => {
         this.setState({ color: 'wheat' });
      }, 4000);
      return (
         <div>
            <h1>Tutorialspoint</h1>
            <ChangeName color={this.state.color} />
         </div>
      );
   }
}
class ChangeName extends React.Component {
   UNSAFE_componentWillUpdate(nextProps, nextState) {
      console.log('Component will be updated soon');
   }
   render() {
      console.log('ChangeName component is called');
      return (
         <div>
            <h1 style={{ color: this.props.color }}>Simply Easy Learning</h1>
         </div>
      );
   }
}
export default WillUpdate;