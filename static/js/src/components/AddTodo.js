/*
待办添加框的组件
*/

import React from 'react';
import { connect } from 'react-redux';
import { Form, FormGroup, FormControl } from 'react-bootstrap';
import { addTodo } from '../actions';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';


class AddTodo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            priority: 1,
            expire: new Date(),
            create: new Date(),
        }
    };



    // 响应回车按下，新建待办
    handleSubmit = (e) => {
        this.state.text = e.target.value.trim();
        if (e.keyCode === 13) {
              if (this.state.text !== '') {
                  this.props.dispatch(
                    addTodo(this.state.text, this.state.id,
                            this.state.priority, this.state.expire,
                            this.state.create));
              }
              // 新建完毕后重置
              this.setState({
                  text: '',
                  priority: 1,
                  expire: new Date(),
                  create: new Date(),
                });
        }
    };


    // 响应内容输入，改变state以触发渲染
    handleChange = (e) => {
        this.setState({text: e.target.value})
    };


    render() {
        return (
            <div className="add-todo-bar">
                <input
                    className="add-todo"
                    id = "add-todo"
                    type="text"
                    autoFocus="true"
                    placeholder="想做什么呢?"
                    value={this.state.text}
                    onChange={this.handleChange}
                    onKeyDown={this.handleSubmit}
                />
                    <Form className="setPriority">
                      <FormGroup>
                          <FormControl
                            componentClass="select"
                            value={this.state.priority}
                            onChange={(e) => {
                                this.state.priority = e.target.value;
                                this.setState({priority: e.target.value});
                                document.getElementById('add-todo').focus();
                              }
                            }
                          >
                              <option className="lowPriority" value="1">
                                  !低优先级
                              </option>
                              <option className="middlePriority" value="2">
                                  !!中优先级
                              </option>
                              <option className="highPriority" value="3">
                                  !!!高优先级
                              </option>
                          </FormControl>
                      </FormGroup>
                    </Form>
                    <DayPickerInput
                        placeholder="过期时间"
                        onDayChange={(day) => {
                            this.state.expire = day;
                            this.setState({expire: day, create: new Date()});
                            document.getElementById('add-todo').focus();
                          }
                        }
                        keepFocus = {false}
                    />
            </div>
        )
    }
}

AddTodo = connect()(AddTodo);

export default AddTodo;
