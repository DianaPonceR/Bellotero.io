import React, { useEffect, useState } from 'react';
import "../styles/layout/content-configurator.scss";
import ConfiguratorTitle from "../components/configurator/ConfiguratorTitle";
import ConfiguratorText from "../components/configurator/ConfiguratorText";
import ConfiguratorItemTitle from "../components/configurator/ConfiguratorItemTitle";
import ConfiguratorInputMonthly from "../components/configurator/ConfiguratorInputMonthly";
import ConfiguratorInputRange from "../components/configurator/ConfiguratorInputRange";
import ConfiguratorInputFullTime from "../components/configurator/ConfiguratorInputFullTime";
import ConfiguratorTotalBox from "../components/configurator/ConfiguratorTotalBox";
import {getCalculator} from "../helpers/getCalculator";
import {useSelector} from "react-redux";

const ContentConfigurator = () => {

    const state = useSelector(state => state)
    const {ingredient_spending, fulltime_employees, cost_food_savings} = state.calculator

    const [calculator, setCalculator] = useState(
        {
            title: '',
            description: ''
        }
    )

    useEffect(() => {
        getCalculator()
            .then(setCalculator)
    }, [])



    return (
        <>
            <section className="content-wrapper">
                <div className="main-content">
                    <div className="config-container">
                        <ConfiguratorTitle title={calculator.title} />
                        <ConfiguratorText description={calculator.description} />
                    </div>

                    <div className="config-container input-controls">
                        <div className="item">
                            <ConfiguratorItemTitle text1="Monthly" text2="ingredient spending"/>
                            <ConfiguratorInputMonthly
                                ingredientInputValue={Number(ingredient_spending)}
                                fulltimeInputValue={Number(fulltime_employees)}
                            />
                            <ConfiguratorInputRange
                                idRange="ingredient_range"
                                ingredientInputValue={Number(ingredient_spending)}
                                fulltimeInputValue={Number(fulltime_employees)}
                                min={0}
                                max={100}
                            />
                        </div>
                        <div className="item">
                            <ConfiguratorItemTitle text1="Full-time employees that" text2="process invoices spending" />
                            <ConfiguratorInputFullTime
                                ingredientInputValue={Number(ingredient_spending)}
                                fulltimeInputValue={Number(fulltime_employees)} />
                            <ConfiguratorInputRange
                                idRange="fulltime_range"
                                ingredientInputValue={Number(ingredient_spending)}
                                fulltimeInputValue={Number(fulltime_employees)}
                                min={0}
                                max={10}
                            />
                        </div>
                        <div className="item">
                            <div className="total-amount-wrapper">
                                <div className="total-amount-container">
                                    <ConfiguratorTotalBox
                                        idTotalBox='estimated_cost_food_savings'
                                        description='Estimated cost food savings'
                                        valueIngredientInput={Number(ingredient_spending)}
                                        costFoodSavings={Number(cost_food_savings)}
                                    />
                                </div>
                                <div className="total-amount-container">
                                    <ConfiguratorTotalBox
                                        idTotalBox='your_estimated_annual_savings'
                                        description='Your estimated annual savings'
                                        valueIngredientInput={Number(ingredient_spending)}
                                        costFoodSavings={Number(cost_food_savings)}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ContentConfigurator;