import React from 'react';
import { bindActionCreators } from 'redux';
import { Connector } from 'react-redux';
import RegisterState from '../components/RegisterState';
import IOStore from '../components/IOStore';
import DebuggerButtons from '../components/DebuggerButtons';
import AssemblyProgram from '../components/AssemblyProgram';
import * as DebuggerActions from '../actions/DebuggerActions';

export default class EmulatorApp {
  render() {
    return (
      <Connector>
        {({ emulator, dispatch }) =>
          <div>
            <DebuggerButtons emulator={emulator}
              {...bindActionCreators(DebuggerActions, dispatch)} />
            <AssemblyProgram instructions={emulator.instructions} programPointer={emulator.program_pointer} />
            <RegisterState registers={emulator.data_memory.registers} />
            <IOStore data={emulator.data_memory.io} />
          </div>
        }
      </Connector>
    );
  }
}
