import Link from 'next/link';
import HistoryDispatcher from '@/components/historyDispatcher/historyDispatcher';

export default function Detail({params}: { params: { id: string } }) {

    return (
        <div style={{padding: '20px'}}>
            <HistoryDispatcher id={params.id}/>
            <Link href={'/l/0'}>back to list</Link>
            <h1>Detail of {params.id}</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque fermentum massa nec vestibulum ornare.
                Donec tincidunt mollis mi in pellentesque. Suspendisse aliquam mi id nisi molestie, ac tincidunt erat
                ornare. Nam consectetur, velit sed viverra congue, purus nibh hendrerit velit, sed porta ipsum nulla in
                leo.
                Vivamus egestas dolor massa, sit amet tincidunt lorem efficitur eget. Mauris malesuada arcu eget
                fermentum
                gravida. Etiam venenatis dictum lorem, et efficitur arcu imperdiet eu. Sed nisi ipsum, blandit quis
                mauris
                porttitor, feugiat bibendum massa. Mauris at iaculis est, semper ultrices enim. Phasellus consectetur
                mauris
                vitae sapien eleifend vulputate. Donec eget lacinia sem, eget dapibus quam. Curabitur scelerisque
                venenatis
                ligula, vel egestas odio varius et. Maecenas vel posuere lacus. Pellentesque et arcu diam.

                Duis vitae odio egestas magna hendrerit euismod eget at neque. Sed at nibh a nibh varius feugiat.
                Curabitur
                sed mauris mollis, blandit augue in, sodales nunc. Fusce commodo pellentesque est eget aliquam. Maecenas
                vulputate odio in gravida hendrerit. Mauris posuere velit vel lacus ullamcorper vestibulum. Nulla et
                massa
                purus. Duis posuere ipsum venenatis diam consectetur suscipit. Nunc elit neque, dictum in lacus ut,
                tristique rhoncus sem. Duis sem sapien, congue in augue ornare, pretium egestas sapien.

                Etiam id suscipit massa, vitae tincidunt eros. Quisque dignissim venenatis lectus vel fermentum. Nulla
                sed
                purus egestas, placerat nisl non, mollis metus. Etiam id pharetra lectus. Etiam vitae pretium lectus, at
                consequat orci. Mauris enim turpis, molestie ut diam eu, fermentum interdum turpis. Lorem ipsum dolor
                sit
                amet, consectetur adipiscing elit. Donec vel nisi eu felis pretium lacinia. Nunc mattis nisi ipsum, vel
                fermentum nibh cursus et. Aenean ut consectetur metus.

                Etiam commodo, metus a vestibulum pellentesque, est leo scelerisque ligula, vitae consequat turpis nisl
                eu
                est. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi
                efficitur,
                diam nec sodales viverra, turpis lacus rutrum ipsum, ut semper diam erat sed augue. Nulla sit amet
                euismod
                leo. Sed gravida auctor accumsan. Donec eu aliquam lectus. Suspendisse a tristique orci. Fusce eu velit
                urna. Nullam commodo felis at libero consequat, maximus commodo sem ultricies. Cras ultrices eget purus
                ut
                convallis. Proin dictum, quam eget lobortis hendrerit, neque leo volutpat arcu, vel gravida ipsum nisl
                at
                mi. In a luctus sapien, vitae tincidunt augue. Proin enim turpis, tempus in vulputate ac, ultricies eu
                turpis. Aliquam posuere laoreet fermentum. Nullam ut pulvinar neque, et egestas erat.

                Duis ac pellentesque dolor, sed tempus nisl. Etiam lacus velit, accumsan a consequat eget, tempus non
                augue.
                Proin viverra, mauris et maximus pharetra, felis lorem ornare lorem, eget sollicitudin nisl purus a
                dolor.
                Phasellus convallis lacinia nunc non tempor. Donec ac rhoncus ante. Interdum et malesuada fames ac ante
                ipsum primis in faucibus. Aliquam quis euismod purus. Pellentesque tincidunt dui eget dolor luctus
                venenatis. Pellentesque id libero quis lectus lobortis tincidunt. Nulla vestibulum euismod libero quis
                vestibulum.

                Donec sit amet risus ipsum. Curabitur faucibus eget turpis id elementum. Donec pellentesque luctus ex,
                id
                vulputate justo semper eu. Aenean sit amet lobortis magna. In ac lacus ut diam auctor egestas id eu
                ante.
                Phasellus posuere id quam vitae venenatis. Sed hendrerit elit pretium, tincidunt odio eget, varius orci
                dui.
            </p>
        </div>
    )
}
