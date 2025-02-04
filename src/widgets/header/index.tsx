import {headerStyles, item, itemList} from './styles.ts'
import {ComponentPropsWithoutRef, FC} from "react"
import {makeClassname} from "@shared/utils"
import {BookmarkPlus} from "lucide-react"

type IHeaderProps = ComponentPropsWithoutRef<'header'>

const Header: FC<IHeaderProps> = ({className, ...props}) => {

  const columns = ['Tasks','Date','Status', <BookmarkPlus />]
  // @ts-ignore
  return (
    <header className={makeClassname(headerStyles(), className)} {...props}>
      <ul className={makeClassname(itemList())}>
        {columns.map((ellement,index) =>
          <li className={makeClassname(item())} key={index}>
            <p>{ellement}</p>
          </li>
        )}
      </ul>
    </header>

  );
};

export default Header;