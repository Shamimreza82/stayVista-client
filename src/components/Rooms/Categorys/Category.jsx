import Container from '../../Shared/Container';
import { categories } from '../../../Data/categoryData';
import CatagoryBox from './CatagoryBox';
import { Link, useSearchParams } from 'react-router-dom';


const Category = () => {

    const [params, setParams] =useSearchParams()
    const category = params.get('category')
    // console.log(category) 

    return (
        <Container>
            <div className='flex gap-10 justify-between py-14 overflow-x-auto'> 
                {categories.map(item => <CatagoryBox 
                key={item.label} 
                icon={item.icon} 
                label={item.label}
                selected={category === item.label}
                
                ></CatagoryBox>
                )}
                </div>
        </Container>
    );
};

export default Category;